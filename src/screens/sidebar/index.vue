<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper"  :bounces="false">
      <image :source="drawerCover" resizeMode="center" class="drawer-cover" :style="stylesObj.drawerCoverObj"/>
      <image :source="Tatpic1" class="backgroundpic" :style="{shadowOffset: { width:10, height: 8 },
        shadowColor: 'black',
        shadowOpacity: .8,
        shadowRadius: 10}" />
      <nb-list class="list">
        <nb-list-item v-for="data in datas" :key="data.route" button noBorder >
          <touchable-opacity :onPress="() => handleListItemClick(data)">           
            <Image resizeMode="center" :source="data.name" class="listitem" />              
          </touchable-opacity> 
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform, TouchableOpacity } from "react-native";
import drawerCover from "../../../assets/fishLogo.1.png";
import matches from "../../../assets/matches.png";
import profile from "../../../assets/profile.png";
import swipe from "../../../assets/swipe.png";
import Tatpic1 from "../../../assets/arm.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      drawerCover: drawerCover,
      swipe: swipe,
      matches: matches,
      profile: profile,
      Tatpic1: Tatpic1,
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5,
          marginLeft: -70,
          marginTop: 60
        }
      },
      datas: [
        {
          name: swipe,
          route: "NHDeckSwiper",
          icon: "swap",
          bg: "#fffede"
        },
        {
          name: matches,
          route: "Matches",
          icon: "albums",
          bg: "gray"
        },
        {
          name: profile,
          route: "MyProfile",
          icon: "information-circle",
          bg: "#2f2f4f"
        }
      ]
    };
  },
  methods: {
    handleListItemClick: function(dataObj) {
      this.navigation.navigate(dataObj.route);
    }
  }
};
</script>

<style>
.backgroundpic {
  margin-left: -111;
  margin-top: -1;
  position: absolute;
  transform: rotate(56deg);
  z-index: -10;
}
.sidebar-content-wrapper {
  background-color: #282828;
  flex: 1;
}
.drawer-cover {
  position: absolute;
}
.list {
  margin-left: -52;
  margin-top: 387;
}
.listitem {
  margin: -25;
}
</style>



