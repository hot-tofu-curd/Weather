<template>
  <div class="citys-list">
    <el-tree
      :data="myTree.root.children"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
import { getCitys } from "../apis/weather";
import { Tree } from "../utils/tree";
import { reactive, toRefs} from "vue";
export default {
  name: "citysList",
  setup(props,{emit}) {
    let myTree = new Tree("根");
    let state = reactive({
      myTree,
      citys: [],
      defaultProps: {
        children: "children",
        label: "data",
      },
    });

    const getCitysData = async () => {
      const data = await getCitys();
      state.citys = data.result;
      state.myTree.beTree(state.citys, ["province", "city", "district"]);
    };

    getCitysData();

    let handleNodeClick = (data) => {
      if (data.children.length != 0) {
      } else {
        emit('terminal-node-click',data.data);
      }
    };

    return { ...toRefs(state), handleNodeClick };
  },
};
</script>

<style>
.citys-list {
  width: 125px;
}
</style>