<template>
  <img src="../assets/heimao.jpg" width="1920" alt="heimao" />
  <div class="home flex">
    <div class="left">
      <citysList @terminal-node-click="show" />
    </div>

    <div class="right">
      <showWeather ref="showWeatherRef" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import citysList from "../components/citysList.vue";
import showWeather from "../components/showWeather.vue";
export default {
  components: { citysList, showWeather },
  name: "Home",
  setup() {
    const showWeatherRef = ref(null);

    const state = reactive({});

    const show = (cityName) => {
      console.log(cityName);
      showWeatherRef.value.city = cityName;
      showWeatherRef.value.getWeatherData();
      console.log(showWeatherRef.value);
    };

    return {
      ...toRefs(state),
      citysList,
      showWeather,

      showWeatherRef,
      show,
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  width: 70%;
  margin: 0 auto;
  background: white;
}

.left {
  flex-grow: 0;
  flex-basis: 200px;
  border-right-style: solid;
  border-left-style: solid;
}

.right {
  flex-grow: 1;
  overflow: hidden;
}

img {
  width: 70%;
}
</style>
