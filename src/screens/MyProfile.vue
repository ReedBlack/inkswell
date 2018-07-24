<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
     <nb-header class="gray" :style="{height: 70, shadowOffset: {  height: 8 },
            shadowColor: 'black',
            shadowOpacity: .8,
            shadowRadius: 10}">
        <nb-left>
          <nb-button
            transparent
            :onPress="() => this.props.navigation.navigate('DrawerOpen')"
          >
            <nb-icon class="cream" name="arrow-back" />
          </nb-button>
        </nb-left>
        <nb-body>
            <Image class="front" resizeMode="center" :style="{marginTop:65}" :source="headerIcon"  />
        </nb-body>
        <nb-right />
     </nb-header>
        
          
     <Image :style="{width: 400, height: 775}" :source="{uri: navigation.getParam('artist_image_link')}" class="imageContainer" />
    <View class="shade">
      <nb-h1 class="cream pads">{{artists.artist_name}}</nb-h1>
      <text class="cream pads more">{{artists.shop}}</text>
    
    </View>

       

      <Carousel :style="{height: 330}" v-if="picArr"
      
      :loop="true"
      :data="picArr"
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
import store from "../../store";
import { Animated, ScrollView, Image, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
export default {
  data() {
    return {
      headerIcon: headerIcon,
      artists: {},
      currentArtist: 3,
      picArr: []
    };
  },
  components: {
    Carousel
  },
  props: {
    navigation: {
      type: Object
    }
  },
  mounted: async function() {
    await store.dispatch("getArtistUsers");
    this.artists = store.state.artists.artists[this.currentArtist]
    this.picArr = await [
    {uri: store.state.artists.artists[this.currentArtist].pic_one}, 
    {uri:store.state.artists.artists[this.currentArtist].pic_two}, 
    {uri:store.state.artists.artists[this.currentArtist].pic_three}
    ]
    console.log(this.picArr)
    
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
  margin-left: 100;
}
.pads {
  margin-left: 50;
}
.shade {
  background-color: rgba(34, 34, 34, 0.5);
  transform: rotate(-11deg);
  position: absolute;
  margin-top: 80;
  margin-left: -40;
  width: 160%;
}
.description {
  background-color: rgba(34, 34, 34, 0.5);
  position: absolute;
  margin-top: 475;
  margin-left: 90;
  width: 75%;
  padding: 4;
  border-radius: 4;
}
.front {
  z-index: 1000;
}
.cream {
  color: #fffede;
}
.gray {
  background-color: #202020;
  z-index: 10;
}
.imageContainer {
  position: absolute;
  z-index: -100;
  margin-top: 50;
}
</style>