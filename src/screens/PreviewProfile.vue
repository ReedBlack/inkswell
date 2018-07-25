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
       
          
    <Image :style="{width: 400, height: 775}" :source="{uri: navigation.getParam('clientImageLink')}" class="imageContainer" />
    <View class="shade">
      <nb-h1 class="cream pads">{{navigation.getParam('clientName')}}</nb-h1>
      <text class="cream pads more">budget: {{navigation.getParam("budget")}}</text>
    </View>
     <View class="description">
       <nb-h2 class="cream">{{navigation.getParam('clientName')}}'s idea:</nb-h2>
       <Text note class="cream" :style="{fontSize: 14}">placement: {{navigation.getParam('placement')}}</Text>
       <Text note class="cream" :style="{fontSize: 14}">size: {{navigation.getParam('size')}}</Text>
       <Text class="cream" :style="{fontSize: 17}">{{navigation.getParam('description')}}</Text>
    </View>
  </nb-container>
</template>

<script>
import headerIcon from "../../assets/i.png";
import React from "react";

import { Animated, ScrollView, Image, View, Text } from "react-native";

export default {
  data() {
    return {
      headerIcon: headerIcon
    };
  },
  props: {
    navigation: {
      type: Object
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