
// Import Vue
import Vue from 'vue';

// Vue Config
Vue.config.debug = true
Vue.config.devTools = true

// Root Component
import App from './App.js';

// New Instance And Mount It!
let app = Vue.extend(App)
new app().$mount('#app');
