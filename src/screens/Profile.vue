<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
     <nb-header :style="{height: 70}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Matches')"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>Profile</nb-title>
          </nb-body>
          <nb-right>
            <nb-button
              transparent
              :onPress="() => handleChatTap()"
            >
              <nb-icon name="arrow-forward" />

            </nb-button>
           
          </nb-right>
     </nb-header>
        <scroll-view :style="{width: '100%'}">
           <Image :source="launchScreenBg" class="imageContainer" :style="{flex: 1, marginTop:250}" />
    <Image :style="{width: 400, height: 775}" :source="{uri: navigation.getParam('artistImageLink')}" class="imageContainer" />
    <View >
      <Text>{{navigation.getParam('artistName')}}</Text>
      <text small>{{navigation.getParam("shop")}}</text>
    </View>
      <Carousel 
      
      :loop="true"
      :data="images"
      :renderItem="_renderItem"
      :windowSize="400"
      :itemWidth="350"
      :itemHeight="350"
      :sliderHeight="550"
      :sliderWidth="400"
      :inactiveSlideScale="0.6"
      :inactiveSlideOpacity="0.4"
    />
  
   </scroll-view>
  </nb-container>
</template>

<script>
import React from "react";
import launchScreenBg from "../../assets/tattoolittle.jpg";
import { Animated, ScrollView, Image, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
export default {
  data() {
    return {
      launchScreenBg: launchScreenBg,
      images: [
        { uri: this.navigation.getParam("picOne") },
        { uri: this.navigation.getParam("picTwo") },
        { uri: this.navigation.getParam("picThree") }
      ]
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Carousel
  },
  methods: {
    handleChatTap: async function(match) {
      this.navigation.navigate("Chat", {
        artistImageLink: this.navigation.getParam("artistImageLink"),
        clientImageLink: this.navigation.getParam("clientImageLink")
      });
    },
    _renderItem: function({ item, index }) {
      return (
        <View>
          <Image
            source={{ uri: item.uri }}
            style={{
              marginTop: 325,
              marginRight: 20,
              width: 300,
              height: 300
            }}
          />
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
.imageContainer {
  position: absolute;
  z-index: -11;
}
</style>