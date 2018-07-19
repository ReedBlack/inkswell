<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
     <nb-header :style="{height: 50}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate.goBack()"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <!-- <nb-title>{{navigation.getParams("name")}}</nb-title> -->
          </nb-body>
          <nb-right />
        </nb-header>
    
    <!-- <text small>{{navigation.getParams("shop")}}</text> -->
    <!-- <image :style="{width: 150, height: 150}" :source="{uri: navigation.getParams('imageLink')}" />
    <image :style="{width: 100, height: 100}" :source="{uri: navigation.getParams('picOne')}" />
    <image :style="{width: 100, height: 100}" :source="{uri: navigation.getParams('picTwo')}" />
    <image :style="{width: 100, height: 100}" :source="{uri: navigation.getParams('picThree')}" /> -->
   
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
