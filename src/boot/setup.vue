<template>
  <view class="container">
    <app-loading v-if="!isAppReady"> </app-loading>
    <app v-if="isAppReady"></app>
  </view>
</template>


<script>
import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { VueNativeBase } from "native-base";
import { AppLoading } from "expo";
import { store } from "../../store";
import socketio from "socket.io-client";
import VueSocketIO from "vue-socket.io";

import App from "../App.vue";

Vue.prototype.$store = store;
// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

export const SocketInstance = socketio("http://localhost:4000");

Vue.use(VueSocketIO, SocketInstance);

export default {
  components: { App, AppLoading },
  data: function() {
    return {
      isAppReady: false
    };
  },
  created: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        this.isAppReady = false;
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    }
  }
};
</script>

<style>
.container {
  flex: 1;
}
</style>

