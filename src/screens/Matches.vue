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
            <nb-title>My Matches</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list>
                <nb-list-item v-for="(match, index) in matches" :key="index">
                   <touchable-opacity class="flex-container" :on-press="() => handleListTap(match)" :style="{flex:1}">
                    <nb-body>
                        <nb-text>
                            {{match.name}}
                        </nb-text>
                        <nb-text :numberOfLines="1">
                            {{match.email}}
                        </nb-text>
                    </nb-body>
                   <nb-right>
                        <nb-thumbnail large :source="{uri: match.imageLink}" />
                    </nb-right>
                    </touchable-opacity>
                </nb-list-item>
            </nb-list>
        </nb-content>
    </nb-container>
</template>


<script>
import store from "../../store";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      matches: []
    };
  },
  methods: {
    handleListTap: async function(match) {
      console.log(match.name);
      this.navigation.navigate("Profile", {
        imageLink: match.imageLink,
        picOne: match.picOne,

        picTwo: match.picTwo,
        picTree: match.picThree,
        // shop: match.shop,
        name: match.name,
        email: match.email
      });
    }
  },
  mounted: async function() {
    await store.dispatch("getMatches");
    this.matches = await store.state.matches;
  }
};
</script>
