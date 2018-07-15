 <template>
    
      <app-navigation></app-navigation>
 
</template>

<script>
import React from "react";
import { StackNavigator, DrawerNavigator } from "vue-native-router";
import { Root } from "native-base";
import HomeScreen from "./screens/home/index.vue";
import SideBarScreen from "./screens/sidebar/index.vue";
import DeckSwiperScreen from "./screens/deckSwiper";
import SignupScreen from "./screens/SignupScreen";
import ArtistSignup from "./screens/ArtistSignup";
import MyProfile from "./screens/MyProfile";

const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    NHDeckSwiper: { screen: DeckSwiperScreen },
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
    ArtistSignup: { screen: ArtistSignup }
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