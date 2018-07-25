<template>
    <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header class="gray" :style="{height: 70, shadowOffset: {  height: 8 },
            shadowColor: 'black',
            shadowOpacity: .8,
            shadowRadius: 10}">
          <nb-left>
            <nb-button
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
        <nb-content padder>
            <nb-list>
                <nb-list-item v-for="(match, index) in matches" :key="index">
                   <touchable-opacity class="flex-container" :on-press="() => handleListTap(match)" :style="{flex:1, flexDirection:'row'}">
                      <nb-body :style="{alignSelf: 'flex-start'}">
                          <nb-h2 class="cream">
                              {{match.clientName}}
                          </nb-h2>
                          <nb-text note class="cream">
                              {{match.clientEmail}}
                          </nb-text>
                      </nb-body>
                      <nb-right :style="{alignSelf: 'flex-end'}">
                          <nb-thumbnail large :source="{uri: match.clientImageLink}" />
                      </nb-right>
                    </touchable-opacity>
                </nb-list-item>
            </nb-list>
        </nb-content>
    </nb-container>
</template>


<script>
import { Alert } from "react-native";
import store from "../../store";
import headerIcon from "../../assets/i.png";
import launchScreenBg from "../../assets/wallpaperbg.jpg";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      headerIcon: headerIcon,
      launchScreenBg: launchScreenBg,
      matches: []
    };
  },
  methods: {
    handleListTap: async function(match) {
      this.navigation.navigate("Profile", {
        match: match,
        clientImageLink: match.clientImageLink,
        artistImageLink: match.artistImageLink,
        description: match.description,
        placement: match.placement,
        size: match.size,
        budget: match.budget,
        clientName: match.clientName,
        email: match.client_email
      });
    }
  },
  mounted: async function() {
    await store.dispatch("getMatches");
    this.matches = await store.state.matches;
  }
};
</script>

<style>
.imageContainer {
  position: absolute;
  z-index: -10;
  margin-top: 69;
}

.gray {
  background-color: #383838;
}
.cream {
  color: #fffede;
}
</style>