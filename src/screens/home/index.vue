<template>
  <nb-container class="home">
    <!-- <status-bar :barStyle="'light-content'"></status-bar> -->
    
    <Image :source="launchScreenBg" class="imageContainer" resizeMode="contain" :style="{marginLeft: -30, marginTop: 300, height:300}" />
    <nb-h3 :style="{marginTop: -55, marginLeft: 40}" class="text-color-white">Linking tattoo artists and clients</nb-h3>
      <nb-content class="margins" padder :style="{marginTop: -10}" >
            <nb-form>
                <nb-item floatingLabel>
                    <nb-label>Username</nb-label>
                    <nb-input />
                </nb-item>
                <nb-item floatingLabel last>
                    <nb-label>Password</nb-label>
                    <nb-input secureTextEntry />
                </nb-item>
            </nb-form>
            <nb-button block :style="{ margin: 15, height: 45 }">
                <nb-text :onPress="showDrawer">Sign In</nb-text>
            </nb-button>
       </nb-content>
       <view :style="{ marginBottom: 40 }">
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
import launchScreenBg from "../../../assets/logoLarge.png";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      launchScreenBg: launchScreenBg,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          backgroundColor: "#2f2f4f",
          alignSelf: "center"
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
.home {
  background-color: #2f2f4f;
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
  color: white;
}
#text-color-navy {
  color: #2f2f4f;
}
.button-container {
  background-color: #fffae5;
  align-self: center;
}
</style>