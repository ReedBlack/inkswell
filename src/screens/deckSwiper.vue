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
        description: this.clients[i].description,
        placement: this.clients[i].placement,
        size: this.clients[i].size,
        budget: this.clients[i].budget,
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
              marginTop: 50,
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
            >budget: {item.budget}
            </Text>
            <Image
              source={{ uri: item.client_image_link }}
              style={{
                marginLeft: 10,
                marginTop: 80,
                width: 320,
                height: 425,
                borderRadius: 4,
                position: 'absolute'
              }}
            />
            <ScrollView style={{width: '86%', height: 60, backgroundColor: 'rgba(34, 34, 34, 0.7)', marginLeft: 20, marginBottom:20, marginTop:250, borderRadius: 6, padding: 8}}>
              <Text style={{fontSize: 21, color: "#fffede" }}>{item.client_name}'s idea:</Text>
              <Text style={{fontSize: 19, color: "#fffede" }}>{item.description}</Text>
           </ScrollView>
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
  background-color: #383838;
}
.cream {
  color: #fffede;
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
</style>