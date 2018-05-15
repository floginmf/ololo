import Vue from 'vue'
import App from './App.vue'
import AppInput from './components/Input.vue'

Vue.component('app-input', AppInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
