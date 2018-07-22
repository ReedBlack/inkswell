<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header class="gray" :style="{ height: 60}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('DrawerOpen')"
            >
              <nb-icon class="cream" name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <Image :source="headerIcon"  />
          </nb-body>
          <nb-right />
        </nb-header>
        <Image :source="launchScreenBg" class="imageContainer" :style="{flex: 1}" />
        <scroll-view>
            <Swiper class="contain" v-if="artists"
     
                :cards="artists"
                :renderCard="_renderItem"
                :showSecondCard="true"
                :stackSize="3"
                :verticalSwipe="false"
                :backgroundColor="null"
               
                
            />
       </scroll-view>
     
  </nb-container>
</template>

<script>
import launchScreenBg from "../../assets/wallpaperbg.jpg";
import headerIcon from "../../assets/small-sideways.png";
import React from "react";
import { Animated, Image, View, Text, ScrollView } from "react-native";
import store from "../../store";
import API from "../../lib/API";
import Vuex from "vuex";
import Carousel from "react-native-snap-carousel";
import Swiper from "react-native-deck-swiper";
// import CardComponent from "./card";

export default {
  components: {
    Carousel,
    Swiper
  },
  data: function() {
    return {
      headerIcon: headerIcon,
      launchScreenBg: launchScreenBg,
      artists: null
    };
  },
  mounted: async function() {
    await store.dispatch("getArtistUsers");
    this.artists = store.state.artists.artists;
    console.log(this.artists);
  },
  methods: {
    _renderItem: function(item, index) {
      return (
        <View>
          <View
            style={{
              backgroundColor: "rgba(169,169,169,.7)",
              width: 345,
              height: 455,

              marginLeft: -3,
              borderRadius: 5
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(169,169,169,.5)",
                marginLeft: 16,
                marginTop: 5
              }}
            >
              <Text
                style={{
                  padding: 3,
                  marginLeft: 5,
                  color: "#fffede",
                  fontSize: 30
                }}
              >
                {item.artist_name}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 8,
                alignSelf: "flex-end",
                marginRight: 5,
                color: "#fffede",
                fontSize: 19
              }}
            >
              {item.shop}
            </Text>
            <Image
              source={{ uri: item.pic_two }}
              style={{
                marginTop: 10,
                marginLeft: 20,
                width: 300,
                height: 300,
                borderRadius: 4
              }}
            />
          </View>
        </View>
      );
    },
    c: function() {
      this._carousel = c;
    }
  }
};
</script>

<style>
.contain {
  margin-top: 100;
  height: 90%;
}
.imageContainer {
  position: absolute;
  z-index: -1;
}
.gray {
  background-color: gray;
  z-index: 1000;
}
.cream {
  color: #fffede;
}
</style>