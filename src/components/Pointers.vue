<template>
<div class="marks">
  <div v-for="(point, index) in pointers" v-bind:key="index">
    <div class="mark" :style="getStyle(point.coord)">
    <svg width="40px" height="40px" viewBox="0 0 139 139" xmlns="http://www.w3.org/2000/svg"><circle cx="69.5" cy="54.5" r="35.2" stroke="#000" stroke-miterlimit="10"/><circle cx="69.5" cy="54.5" r="20.8" fill="#fff"/><path d="M70 121l-3-1C29 76 34 55 34 55s11 35 36 35M70 121l2-1c38-44 33-65 33-65S94 90 70 90"/></svg>
    </div>
  </div>
</div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'
//import { PinchZoom } from 'pinch-zoom-element/dist/pinch-zoom.mjs'

export default {
  name: 'Pointers',
  directives: {
    Draggable,
  },
  props: {
    transform: {
      type: Array,
      default: function() {
        return [0,0,1]
      }
    },
    pointers: {
      type: Array,
      default: function() {
        return []
      }
    },
  },
  data: () => { return {
    _transform: []
  }},
  computed: {

  },
  methods: {
    placePoints: function() {
      // pointers.forEach((pointer, index) => {
      //   const mark = document.createElement("div"); 

      // })
    },

    transformPoints: function() {
      console.log("onmove", this._transform)
      this.pointers.forEach((pointer) => {
        pointer.coord[0]+=this._transform[0]
        pointer.coord[1]+=this._transform[1]
      })
    },

    getStyle(coord) {
      return `left: ${coord[0]}px; top: ${coord[1]}px;`
    }
  },
  mounted: function() {
    //this.placePoints();
  },
  watch: {
    transform: function(newVal) {
      this._transform = newVal
      this.transformPoints()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mark {
  position: absolute;
}
</style>
