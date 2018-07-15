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
            <nb-deck-swiper
                :dataSource="artists"
                :looping="isLoopingRequired"
                :renderEmpty="handleCardEmpty"
                :renderItem="handleCardRendering"
            >
           
            </nb-deck-swiper>
        </view>
  </nb-container>
</template>

<script>
import React from "react";
import { View, Text } from "react-native";
// import cardOne from "../../assets/swiper-1.png";
// import cardTwo from "../../assets/swiper-2.png";
// import cardThree from "../../assets/swiper-3.png";
// import cardFour from "../../assets/swiper-4.png";
// import store from "../../store";

import CardComponent from "./card";

export default {
  data: function() {
    return {
      artists: [
        {
          name: "Elaine Lorey",
          shop: "Urban Element",
          hasSwipedRight: true,
          mainPic:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine1.png",
          picTwo:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine2.png",
          picThree:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine3.png"
        },
        {
          name: "Brooke Engleheart",
          shop: "Evoke Tattoos",
          hasSwipedRight: false,
          mainPic:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke1.jpg",
          picTwo:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke2.jpg",
          picThree:
            "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke3.png"
        }
      ],
      isLoopingRequired: true
    };
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

