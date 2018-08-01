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
      <Swiper class="contain" v-if="artists"
        :cards="artists"
        :renderCard="_renderItem"
        :showSecondCard="true"
        :stackSize="3"
        :verticalSwipe="false"
        :backgroundColor="null"  
        :cardIndex="cardIndex"
        :onTapCard="onTapCard"    
      />     
  </nb-container>
</template>

<script>
import launchScreenBg from "../../assets/wallpaperbg.jpg";
import headerIcon from "../../assets/i.png";
import React from "react";
import { Animated, Image, View, Text, ScrollView } from "react-native";
import store from "../../store";
import API from "../../lib/API";
import Vuex from "vuex";
import Swiper from "react-native-deck-swiper";

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
              width: 345,
              height: 455,
              marginTop: 80,
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
    }
  }
};
</script>

<style>
.front {
  z-index: 1000;
}
.contain {
  margin-top: 100;
  height: 90%;
}
.imageContainer {
  position: absolute;
  z-index: -1;
  margin-top: 60;
}
.gray {
  background-color: #383838;
}
.cream {
  color: #fffede;
}
</style>