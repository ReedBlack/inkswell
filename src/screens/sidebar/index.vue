<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper"  :bounces="false">
      <image :source="drawerCover" resizeMode="cover" class="drawer-cover" :style="stylesObj.drawerCoverObj"/>
      <nb-list>
        <nb-list-item v-for="data in datas" :key="data.route" button noBorder :onPress="() => handleListItemClick(data)">
          <nb-left>
            <nb-icon
              active
              :name="data.icon"
              :style="{ color: '#fffede', fontSize: 30, width: 30 }"
            />
            <nb-text class="list">
              {{data.name}}
            </nb-text>
          </nb-left>
        
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import drawerCover from "../../../assets/bluefish.png";

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
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5,
          backgroundColor: "#fffede",
          marginLeft: -65,
          paddingTop: 140
        },
        drawerImageObj: {
          left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
          top:
            Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
          resizeMode: "cover"
        },
        badgeText: {
          fontSize: Platform.OS === "android" ? 11 : 13,
          marginTop: Platform.OS === "android" ? -3 : 0,
          fontWeight: "400",
          color: "#fffede"
        }
      },
      datas: [
        {
          name: "Swipe",
          route: "NHDeckSwiper",
          icon: "swap",
          bg: "#fffede"
        },
        {
          name: "Matches",
          route: "Matches",
          icon: "albums",
          bg: "#2f2f4f"
        },
        {
          name: "My Profile",
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
.sidebar-content-wrapper {
  flex: 1;
  background-color: #2f2f4f;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
.list {
  color: #fffede;
}
</style>



