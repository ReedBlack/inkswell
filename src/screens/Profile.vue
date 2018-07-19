<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
     <nb-header :style="{height: 50}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Matches')"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <nb-title>{{navigation.getParam("name")}}</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
    
    <!-- <text small>{{navigation.getParams("shop")}}</text> -->
   <Image :style="{width: 150, height: 150}" :source="{uri: navigation.getParam('imageLink')}" />
    <Image :style="{width: 100, height: 100}" :source="{uri: navigation.getParam('picOne')}" />
    <Image :style="{width: 100, height: 100}" :source="{uri: this.props.navigation.getParam('picTwo')}" />
    <Image :style="{width: 100, height: 100}" :source="{uri: this.props.navigation.getParam('picThree')}" />
   
  </nb-container>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  }
};
</script>
