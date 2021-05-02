<template>
  <el-form :inline="true">
    <el-form-item label="城市">
      <el-input v-model="city"></el-input>
    </el-form-item>

    <el-button type="primary" @click="getWeatherData()">查询天气</el-button>
  </el-form>
  <h3>现在天气</h3>
  <el-table :data="realtime" style="width: 100%" v-if="show">
    <el-table-column prop="info" label="天气情况"></el-table-column>
    <el-table-column
      prop="temperature"
      label="温度"
    
    ></el-table-column>
    <el-table-column prop="humidity" label="湿度"></el-table-column>
    <el-table-column prop="direct" label="风向"></el-table-column>
    <el-table-column prop="power" label="风力"></el-table-column>
    <el-table-column
      prop="aqi"
      label="空气质量指数"
    
    ></el-table-column>
  </el-table>
  <h3>未来天气</h3>
  <el-table :data="future" style="width: 100%" v-if="show">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column
      prop="temperature"
      label="最低温/最高温"
    
    ></el-table-column>
    <el-table-column prop="weather" label="天气情况"></el-table-column>
    <el-table-column prop="direct" label="风向"></el-table-column>
  </el-table>
</template>

<script>
import { getWeather } from "../apis/weather";
import { reactive, toRefs } from "vue";
export default {
  name: "showWeather",
  setup() {
    const state = reactive({
      city: null,
      realtime: [],
      future: [],
      show: false,
    });

    const getWeatherData = async () => {
      console.log("执行");
      let data = await getWeather(state.city);
      state.realtime = [data.result.realtime];
      state.future = data.result.future;
      state.show = true;
    };

    return { ...toRefs(state), getWeatherData };
  },
};
</script>

<style scoped>
</style>