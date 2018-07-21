<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
     <nb-header class="gray" :style="{height: 70}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Matches')"
            >
              <nb-icon class="cream" name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
           <Image class="front" :source="headerIcon"  />
          </nb-body>
          <nb-right>
            <nb-button
              transparent
              :onPress="() => handleChatTap()"
            >
              <nb-icon class="cream" name="arrow-forward" />

            </nb-button>
           
          </nb-right>
     </nb-header>
       
          
    <Image :style="{width: 400, height: 775}" :source="{uri: navigation.getParam('artistImageLink')}" class="imageContainer" />
    <View class="shade">
      <nb-h1 class="cream pads">{{navigation.getParam('artistName')}}</nb-h1>
      <text class="cream pads more">{{navigation.getParam("shop")}}</text>
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
  

  </nb-container>
</template>

<script>
import headerIcon from "../../assets/small-sideways.png";
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
              marginTop: 275,
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
.more {
  margin-left: 140;
}
.pads {
  margin-left: 50;
}
.shade {
  background-color: rgba(169, 169, 169, 0.5);
  transform: rotate(-11deg);
  position: absolute;
  margin-top: 80;
  margin-left: -40;
  width: 160%;
}
.front {
  z-index: 1000;
}
.cream {
  color: #fffede;
}
.gray {
  background-color: gray;
  z-index: 10;
}
.imageContainer {
  position: absolute;
  z-index: -100;
}
</style>