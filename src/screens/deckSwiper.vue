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
      
            <Swiper class="contain" v-if="clients"
                :cards="clients"
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
import Carousel from "react-native-snap-carousel";
import Swiper from "react-native-deck-swiper";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Carousel,
    Swiper
  },
  data: function() {
    return {
      headerIcon: headerIcon,
      launchScreenBg: launchScreenBg,
      clients: null,
      cardIndex: 0
    };
  },
  beforeMount: async function() {
    await store.dispatch("getClientUsers");
    this.clients = store.state.clients.clients;
  },
  methods: {
    onTapCard: async function(i) {
      await this.navigation.navigate("PreviewProfile", {
        clientImageLink: this.clients[i].client_image_link,
        picOne: this.clients[i].pic_one,

        picTwo: this.clients[i].pic_two,
        picThree: this.clients[i].pic_three,
        shop: this.clients[i].shop,
        clientName: this.clients[i].client_name
      });
    },
    _renderItem: function(item, index) {
      return (
        <View>
          <View
            style={{
              backgroundColor: "rgba(169,169,169,.7)",
              width: 345,
              height: 525,
              marginTop: 60,
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
                {item.client_name}
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
              source={{ uri: item.client_image_link }}
              style={{
                marginLeft: 10,
                width: 320,
                height: 425,
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
  background-color: #202020;
}
.cream {
  color: #fffede;
}
</style>