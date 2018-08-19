<template>   
  <app-navigation></app-navigation> 
</template>

<script>
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";
import ArtistSignup from "./screens/ArtistSignup";
import Chat from "./screens/Chat";
import DeckSwiperScreen from "./screens/deckSwiper";
import HomeScreen from "./screens/home/index.vue";
import Matches from "./screens/Matches";
import MyProfile from "./screens/MyProfile";
import PreviewProfile from "./screens/PreviewProfile";
import Profile from "./screens/Profile";
import React from "react";
import SideBarScreen from "./screens/sidebar/index.vue";
import SignupScreen from "./screens/SignupScreen";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    NHDeckSwiper: { screen: DeckSwiperScreen },
    Matches: { screen: Matches },
    MyProfile: { screen: MyProfile }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => {
      // console.log("props inside contentComponent", props);
      return <SideBarScreen {...props} />;
    }
  }
);

const AppNavigation = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: HomeScreen },
    SimpleDeck: { screen: DeckSwiperScreen },
    SignupScreen: { screen: SignupScreen },
    ArtistSignup: { screen: ArtistSignup },
    Profile: { screen: Profile },
    PreviewProfile: { screen: PreviewProfile },
    Chat: { screen: Chat }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
export default {
  components: { Root, AppNavigation }
};
</script> 