<template>
  <nb-container class="home">
    <!-- <status-bar :barStyle="'light-content'"></status-bar> -->
    
    <Image :source="launchScreenLogo" resizeMode="contain" :style="{marginLeft: -30, marginTop: 275, height:300}" />
    <Image :source="launchScreenBg" class="imageContainer" :style="{flex: 1, marginTop:15}" />
    <nb-text :style="{marginTop: -75, marginLeft: 71}" class="text-color-white">Linking tattoo artists and clients</nb-text>
      <nb-content class="margins" padder :style="{marginTop: 10}" >
            <nb-form>
                <nb-item fixedLabel>
                    <nb-label class="text-color-white">Username</nb-label>
                    <nb-input />
                </nb-item>
                <nb-item fixedLabel last>
                    <nb-label class="text-color-white">Password</nb-label>
                    <nb-input secureTextEntry />
                </nb-item>
            </nb-form>
            <nb-button block :style="stylesObj.btnContainer">
                <nb-text :onPress="showDrawer">Sign In</nb-text>
            </nb-button>
       </nb-content>
       <view :style="{ marginBottom: 25 }">
        <nb-button :style="stylesObj.btnContainer">
          <nb-text id="text-color-navy" :onPress="navigateToSignupScreen">client signup</nb-text>
        </nb-button>
        <nb-button :style="stylesObj.btnContainer">
          <nb-text id="text-color-navy" :onPress="navigateToArtistSignupScreen">artist signup</nb-text>
        </nb-button>
      </view>
  </nb-container>

</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenLogo from "../../../assets/logoLarge.png";
import launchScreenBg from "../../../assets/tattoolittle.jpg";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      launchScreenBg: launchScreenBg,
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
          backgroundColor: "black",
          opacity: .5,
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
.imageContainer {
  position:absolute;
  z-index:-10
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