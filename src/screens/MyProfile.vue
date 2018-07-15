<template>
  <nb-container :style="{backgroundColor: '#fff'}">
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
            <nb-title>Home</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>

        <nb-content padder>
            <nb-card>
                <nb-card-item bordered>
                    <nb-left>
                        <nb-body>
                            <nb-text>Reed Black</nb-text>
                            <nb-text note>Budget: ${{budget}}/hr</nb-text>
                        </nb-body>
                    </nb-left>
                </nb-card-item> 

                <nb-card-item>
                    <nb-body>
                        <image :source="cardImage" class="card-item-image" :style="stylesObj.cardItemImage"/>
                        <nb-text note>size: grapefruit</nb-text>
                        <nb-text note>placement: tramp stamp</nb-text>
                        <nb-text>I'm looking for a butterfly right above my ass.</nb-text>
                    </nb-body>
                </nb-card-item>
                
               
            </nb-card>
        </nb-content>
      </nb-container>
</template>

<script>
import { Dimensions } from "react-native";

import cardImage from "../../assets/me.jpg";

const deviceWidth = Dimensions.get("window").width;
export default {
  data: function() {
    return {
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      },
      budget: 125
    };
  }
};
</script>


<style>
.mb-15 {
  margin-bottom: 15;
}
.card-item-image {
  align-self: center;
  height: 250;
}
</style>
