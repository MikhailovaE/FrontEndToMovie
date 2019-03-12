//import Vue from 'vue'

//import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.use(BootstrapVue);

//import BCarousel from 'bootstrap-vue/es/components/carousel/carousel'
//Vue.component('b-carousel', BCarousel)

//import ex from './slide.vue'

window.onload = function () {
  // register modal component
  Vue.component('modal', {
    template: '#modal-template'
  })

  // start app
  new Vue({
    el: '#app',
    data: {
      showModal: false,
      slide: 0,
      sliding: null,
    },
    methods: {
      onSlideStart(slide) {
          this.sliding = true
      },
      onSlideEnd(slide) {
          this.sliding = false
      }
    }
  })
}
