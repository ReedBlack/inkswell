<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header>
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('DrawerOpen')"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>Back</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <view :style="{flex: 1, padding: 12}">
            <nb-deck-swiper v-if="artistArr"
                :dataSource="artistArr"
                :looping="isLoopingRequired"
                :renderEmpty="handleCardEmpty"
               
                :renderItem="handleCardRendering"

            />
           
          
        </view>
  </nb-container>
</template>

<script>
import React from "react";
import { View, Text } from "react-native";
import store from "../../store";
import API from "../../lib/API";
import Vuex from "vuex";

import CardComponent from "./card";

export default {
   computed: {
     artistArr: async function() {
       await console.log(store.state.artists, "yo dawg");

       return await store.state.artists;
     }
   },

  data: function() {
    return {
      isLoopingRequired: true,
      artistTest: null
    };
  },
  mounted: async function() {
    await store.dispatch("getArtistUsers");
    // this.artistTest = store.state.artists.artists;
     
  },
  methods: {
    handleCardEmpty: function() {
      return (
        <View>
          <Text>That's all the designs for now. Please check back later.</Text>
        </View>
      );
    },
    handleCardRendering: function(artist) {
      return <CardComponent artist={artist} />;
    }
  }
};
</script>

