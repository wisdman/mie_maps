<template>
<div class="maps">
  <div class="maps-container" v-hammer:pinch="onTouch" v-hammer:pinchend="onTouch" v-hammer:pan="onTouch" v-hammer:panend="onTouch" v-hammer:doubletap="onTouch" ref="zoomable">
    <div class="map map-new"><img src="../assets/Maps/ekaterinburg.jpg" alt=""></div>
    <div class="map map-old" :style="mapTransform"><img :src="require(`@/assets/${yearMap}`)" alt="" :style="opacityStyle"></div>
  </div>
</div>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'CityMap',
  directives: {
    Draggable,
  },
  props: {
    year: Number,
    epoch: Number,
    yearMaps: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  data: () => { return {
    last_posX: 0,
    last_posY: 0,
    last_scale: 1
  }},
  computed: {
    opacityStyle: function() {
      return "opacity: " + this.epoch / 10
    },
    yearMap: function() {
      let curYear = this.yearMaps[this.year]
      if(!curYear)
        return ""
      return `Maps/${curYear.image}`
    },
    mapTransform: function() {
      return this.yearMaps[this.year].transform
    }
  },
  methods: {
    onTouch(ev) {
      console.log(ev);
      let posX = 0,
        posY = 0,
        scale = this.last_scale,
        max_pos_x = 0,
        max_pos_y = 0,
        transform = "",
        el = this.$refs.zoomable;
        console.log(this.last_scale)
      // if (ev.type == "doubletap") {
      //     transform =
      //         "translate3d(0, 0, 0) " +
      //         "scale3d(2, 2, 1) ";
      //     scale = 2;
      //     this.last_scale = 2;
      //     try {
      //         if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
      //             transform =
      //                 "translate3d(0, 0, 0) " +
      //                 "scale3d(1, 1, 1) ";
      //             scale = 1;
      //             this.last_scale = 1;
      //         }
      //     } catch (err) {
      //       return err;
      //     }
      //     el.style.webkitTransform = transform;
      //     transform = "";
      // }

      //pan    
      //if (scale != 1) {
          posX = this.last_posX + ev.deltaX;
          posY = this.last_posY + ev.deltaY;
          
          // max_pos_x = Math.ceil((scale) * el.clientWidth / 2);
          // max_pos_y = Math.ceil((scale) * el.clientHeight / 2);
          // if (posX > max_pos_x) {
          //     posX = max_pos_x;
          // }
          // if (posX < -max_pos_x) {
          //     posX = -max_pos_x;
          // }
          // if (posY > max_pos_y) {
          //     posY = max_pos_y;
          // }
          // if (posY < -max_pos_y) {
          //     posY = -max_pos_y;
          // }
      //}


      //pinch
      if (ev.type == "pinch") {
          scale = Math.max(.999, Math.min(this.last_scale * (ev.scale), 4));
      }
      if(ev.type == "pinchend"){ scale = Math.max(.999, Math.min(this.last_scale * (ev.scale), 4)); this.last_scale = scale; console.log("pinchend");}

      //panend
      if(ev.type == "panend"){
        
          this.last_posX = posX // < max_pos_x ? posX : max_pos_x;
          this.last_posY = posY // < max_pos_y ? posY : max_pos_y;
      }

      if (scale != 1) {
          transform =
              "translate3d(" + posX + "px," + posY + "px, 0) " +
              "scale3d(" + scale + ", " + scale + ", 1)";
      }

      if (transform) {
          el.style.webkitTransform = transform;
      }

    }
  },
  mounted: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maps {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.map,
.maps-draggable {
  position: absolute;
  top: 0;
  left: 0;
}
.maps-container {
  transform: scale(2);
}
.map-old {
  transform: rotate(85deg) scale(0.86);
}
.map-new {
  left: -328px; 
  top: -764px;
}
</style>
