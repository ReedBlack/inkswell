<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header class="gray" :style="{ height: 60, shadowOffset: {  height: 8 },
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowRadius: 10}">
      <nb-left>
        <nb-button class="front"
          transparent
          :onPress="() => this.props.navigation.navigate('DrawerOpen')"
          >
          <nb-icon class="cream" name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <Image resizeMode="center" :style="{marginTop:65}" :source="headerIcon"  />
      </nb-body>
      <nb-right />
    </nb-header>
    <Image :source="launchScreenBg" class="imageContainer" :style="{flex: 1}" />
    <View>
      <Swiper v-if="artists"
        :backgroundColor="null"  
        :cards="artists"
        :renderCard="_renderItem"
        :showSecondCard="true"
        :stackSize="3"
        :verticalSwipe="false"
        :cardIndex="cardIndex"
        :onTapCard="onTapCard"    
      />     
    </View>
  </nb-container>
</template>

<script>
import { Animated, Image, View, Text, ScrollView } from "react-native";
import API from "../../lib/API";
import headerIcon from "../../assets/i.png";
import launchScreenBg from "../../assets/wallpaperbg.jpg";
import React from "react";
import store from "../../store";
import Swiper from "react-native-deck-swiper";
import Vuex from "vuex";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Swiper
  },
  data: function() {
    return {
      headerIcon: headerIcon,
      launchScreenBg: launchScreenBg,
      artists: null,
      cardIndex: 0
    };
  },
  beforeMount: async function() {
    await store.dispatch("getArtistUsers");
    this.artists = store.state.artists.artists;
  },
  methods: {
    onTapCard: async function(i) {
      await this.navigation.navigate("PreviewProfile", {
        artistImageLink: this.artists[i].artist_image_link,
        picOne: this.artists[i].pic_one,
        picTwo: this.artists[i].pic_two,
        picThree: this.artists[i].pic_three,
        shop: this.artists[i].shop,
        artistName: this.artists[i].artist_name
      });
    },
    _renderItem: function(item, index) {
      return (
        <View>
          <View
            style={{
              backgroundColor: "rgba(169,169,169,.7)",
              borderRadius: 5,
              height: 455,
              marginLeft: -3,
              width: 345
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(169,169,169,.5)",
                marginTop: 5,
                marginLeft: 16
              }}
            >
              <Text
                style={{
                  color: "#fffede",
                  fontSize: 30,
                  marginLeft: 5,
                  padding: 3
                }}
              >
                {item.artist_name}
              </Text>
            </View>
            <Text
              style={{
                alignSelf: "flex-end",
                color: "#fffede",
                fontSize: 19,
                marginTop: 8,
                marginRight: 5
              }}
            >
              {item.shop}
            </Text>
            <Image
              source={{ uri: item.pic_two }}
              style={{
                borderRadius: 4,
                height: 300,
                marginLeft: 20,
                marginTop: 10,
                width: 300
              }}
            />
          </View>
        </View>
      );
    }
  }
};
</script>

<style>
.front {
  z-index: 9999;
}
.imageContainer {
  margin-top: 60;
  position: absolute;
  z-index: -1;
}
.gray {
  background-color: #383838;
}
.cream {
  color: #fffede;
}
</style>