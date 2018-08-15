<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header class="gray" :style="{height: 70,
      shadowOffset: {  height: 7 },
      shadowColor: 'black',
      shadowOpacity: .7,
      shadowRadius: 9}">
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.goBack()"
        >
          <nb-icon class="cream" name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <Image class="front" resizeMode="center" :style="{marginTop:65}" :source="headerIcon"  />
      </nb-body>
      <nb-right>
      </nb-right>
    </nb-header>    
    <Image :style="{width: 400, height: 775}" :source="{uri: navigation.getParam('artistImageLink')}" class="imageContainer" />
    <View class="shade">
      <nb-h1 class="cream pads">{{navigation.getParam('artistName')}}</nb-h1>
      <text class="cream pads more">{{navigation.getParam("shop")}}</text>
    </View>
    <Carousel :style="{height: 330}"    
    :loop="true"
    :data="images"
    :renderItem="_renderItem"
    :windowSize="400"
    :itemWidth="350"
    :itemHeight="350"
    :sliderHeight="550"
    :sliderWidth="400"
    :inactiveSlideScale="0.5"
    :inactiveSlideOpacity="0.3"
    />
  </nb-container>
</template>

<script>
import headerIcon from "../../assets/i.png";
import React from "react";
import { Animated, ScrollView, Image, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

export default {
  data() {
    return {
      headerIcon: headerIcon,
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
    _renderItem: function({ item, index }) {
      return (
        <View
          style={{
            shadowOffset: { width: 5, height: 4 },
            shadowColor: "black",
            shadowOpacity: 0.7,
            shadowRadius: 5,
            elevation: 3,
            height: 300,
            marginTop: 275
          }}
        >
          <Image
            source={{ uri: item.uri }}
            style={{
              marginLeft: 21,
              width: 280,
              height: 280,
              borderRadius: 5
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
.more {
  margin-left: 130;
}
.pads {
  margin-left: 40;
}
.shade {
  background-color: rgba(34, 34, 34, 0.5);
  transform: rotate(-11deg);
  position: absolute;
  margin-top: 95;
  margin-left: -10;
  width: 130%;
}
.front {
  z-index: 1000;
}
.cream {
  color: #fffede;
}
.gray {
  background-color: #383838;
  z-index: 10;
}
.imageContainer {
  margin-top: 60;
  position: absolute;
  z-index: -100;
}
</style>