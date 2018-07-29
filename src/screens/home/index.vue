<template>
  <nb-container class="home">
    <Image :source="launchScreenLogo" resizeMode="contain" :style="{marginLeft: -30, marginTop: 275, height:300}" />
    <Image :source="launchScreenBg"  class="imageContainer" :style="{flex: 1, marginTop:250}" />
    <Image left :source="phrase" resizeMode="center" :style="{marginTop: -120, marginLeft:-178}" />
      <nb-content class="margins" padder :style="{marginTop: 140}" >
        <nb-form>
            <nb-item fixedLabel>
              <nb-label class="text-color-white light">Username</nb-label>
              <nb-input />
            </nb-item>
            <nb-item fixedLabel last>
              <nb-label class="text-color-white light">Password</nb-label>
              <nb-input secureTextEntry />
            </nb-item>
        </nb-form>
        <nb-button block :style="stylesObj.btnContainer">
            <nb-text :onPress="showDrawer">Sign In</nb-text>
        </nb-button>      
      </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenLogo from "../../../assets/logoLarge.png";
import launchScreenBg from "../../../assets/tatted.jpg";
import phrase from "../../../assets/phrase.png";
import { Font } from "expo";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      launchScreenBg: launchScreenBg,
      phrase: phrase,
      launchScreenLogo: launchScreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          marginTop: 38,
          backgroundColor: "black",
          opacity: 0.5,
          alignSelf: "center",
          margin: 3
        }
      },
      datas: [
        {
          name: "SignupScreen",
          route: "SignupScreen"
        },
        {
          name: "ArtistSignup",
          route: "ArtistSignup"
        }
      ]
    };
  },
  methods: {
    showDrawer() {
      this.navigation.navigate("DrawerOpen");
    },
    navigateToSignupScreen() {
      this.navigation.navigate("SignupScreen");
    },
    navigateToArtistSignupScreen() {
      this.navigation.navigate("ArtistSignup");
    }
  }
};
</script>

 
<style>
.light {
  opacity: 0.8;
}
.imageContainer {
  position: absolute;
  z-index: -10;
}
.home {
  margin-top: -250px;
}

.text-color-primary {
  color: #2f2f4f;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.text-container {
  align-items: center;

  margin-bottom: 10;
  background-color: transparent;
}
.text-color-white {
  color: #fffede;
}
#text-color-navy {
  color: #2f2f4f;
}
.button-container {
  background-color: #fffede;
  align-self: center;
}
</style>