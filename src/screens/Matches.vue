<template>
    <nb-container :style="{ backgroundColor: '#fff' }">
        <nb-header class="gray" :style="{height: 70}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('DrawerOpen')"
            >
              <nb-icon class="cream" name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <Image :source="headerIcon"  />
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
                              {{match.artistName}}
                          </nb-h2>
                          <nb-text note class="cream">
                              {{match.artistEmail}}
                          </nb-text>
                      </nb-body>
                      <nb-right :style="{alignSelf: 'flex-end'}">
                          <nb-thumbnail large :source="{uri: match.artistImageLink}" />
                      </nb-right>
                    </touchable-opacity>
                </nb-list-item>
            </nb-list>
        </nb-content>
    </nb-container>
</template>


<script>
import store from "../../store";
import headerIcon from "../../assets/small-sideways.png";
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
        artistImageLink: match.artistImageLink,
        picOne: match.picOne,
        clientImageLink: match.clientImageLink,
        picTwo: match.picTwo,
        picThree: match.picThree,
        shop: match.shop,
        artistName: match.artistName,
        email: match.artist_email
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
}

.gray {
  background-color: gray;
}
.cream {
  color: #fffede;
}
</style>