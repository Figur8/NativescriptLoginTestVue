import Vue from 'nativescript-vue';
import App from './components/App.vue';

import VueDevtools from 'nativescript-vue-devtools';
import store from './store';

// import client from "./lib/fusionAuthClientInstance";
// import { LoginRequest } from "@fusionauth/typescript-client";

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()

export class main {
//   login = 'ismaelteste';
//   password = '123456789';
//   request : LoginRequest = {
//       "loginId": this.login,
//       "password": this.password,
//       "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
//   };

  constructor() {
    // console.info(this.clientLogin());
  }

  // clientLogin() {
  //   return client.login(this.request)
  //     .then(this.handleResponse, this.handleErrorResponse);
  // }
  //
  //
  // public handleResponse(clientResponse) {
  //   console.info(JSON.stringify(clientResponse, null, 2));
  // }
  //
  // public handleErrorResponse(clientResponse) {
  //   console.error(JSON.stringify(clientResponse, null, 2));
  // }
}