<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header class="gray" :style="{height: 60}">
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
            <Carousel v-if="artists"
     
                :data="artists"
                :renderItem="_renderItem"
                
                :windowSize="400"
                 :itemWidth="350"
                :itemHeight="350"
                :sliderHeight="550"
               :sliderWidth="400"
               :inactiveSlideScale="0.6"
               :inactiveSlideOpacity="0.4"


            />
           
          
     
  </nb-container>
</template>

<script>
import launchScreenBg from "../../assets/wallpaperbg.jpg";
import headerIcon from "../../assets/small-sideways.png";
import React from "react";
import { Animated, Image, View, Text } from "react-native";
import store from "../../store";
import API from "../../lib/API";
import Vuex from "vuex";
import Carousel from "react-native-snap-carousel";
// import CardComponent from "./card";

export default {
  components: {
    Carousel
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
      console.log(item.item.artist_name);
      return (
        <View>
          <View
            style={{
              backgroundColor: "rgba(169,169,169,.5)",
              width: 345,
              height: 455,
              marginTop: 60,
              marginLeft: -10,
              borderRadius: 5
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(169,169,169,.3)",
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
                {item.item.artist_name}
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
              {item.item.shop}
            </Text>
            <Image
              source={{ uri: item.item.pic_two }}
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
.imageContainer {
  position: absolute;
  z-index: -10;
}
.gray {
  background-color: gray;
}
.cream {
  color: #fffede;
}
</style>