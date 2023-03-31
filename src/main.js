import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'


Vue.config.productionTip = false
Vue.use(element)
// Vue.use(Row)
// Vue.use(Aside)
// Vue.use(Button)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Main)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
