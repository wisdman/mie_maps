<template>
  <div id="app">
    <city-map :year="year" :epoch="epoch" :yearMaps="mapsArray"></city-map>
    <div class="epochSlderContainer"><el-slider v-model="epoch" :min="0" :max="10" :step="1" :show-tooltip="false"></el-slider></div>
    <div class="yearsSlderContainer"><el-slider
      v-model="year"
      show-stops
      :marks="yearMarks"
      :max="3"
      :show-tooltip="false">
    </el-slider></div>
  </div>
</template>

<script>
import CityMap from './components/CityMap.vue'

export default {
  name: 'App',
  components: {
    CityMap
  },
  data: () => { return {
    epoch: 5,
    year: 1,
    yearMarks: {
      0: '1780',
      1: '1900',
      2: '1910',
      3: '1947',
      // 50: {
      //   style: {
      //     color: '#1989FA'
      //   },
      //   label: this.$createElement('strong', '50%')
      // }
    },
    points: {},
    mapsArray: [
      {
        year: "1780",
        image: "1780.jpg",
        transform: "left:-403.528px;top: -443.317px;transform:rotate(85deg) scale(0.18); "
      },
      {
        year: "1900",
        image: "1900.jpg",
        transform: "transform: rotate(-5deg) scale(0.45); left:191.883px;top: -392.277px;"
      },
      {
        year: "1910",
        image: "1910.jpg",
        transform: "transform: rotate(85deg) scale(0.86);"
      },
      {
        year: "1947",
        image: "1947.jpg",
        transform: "transform: rotate(6deg) scale(0.65); left: -1078px; top: -1728px;"
      }
    ]
  }},
  methods: {
    
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}
  .epochSlderContainer {
    position: fixed;
    top: 50px;
    right: 50px;
    width: 400px;
  }

  .yearsSlderContainer {
    position: fixed;
    bottom: 50px;
    right: 100px;
    left: 100px;
  }
</style>
