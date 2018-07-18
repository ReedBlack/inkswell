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
            <nb-title>List Avatar</nb-title>
          </nb-body>
          <nb-right />
        </nb-header>
        <nb-content padder>
            <nb-list>
                <nb-list-item v-for="match in matches" :key="match.id">
                   
                    <nb-body>
                        <nb-text>
                            {{match.id}}
                        </nb-text>
                        <nb-text :numberOfLines="1">
                            {{match.artist_id.artist}}
                        </nb-text>
                    </nb-body>
                    <nb-right>
                        <nb-text note> {{match.client_id}} </nb-text>
                    </nb-right>
                </nb-list-item>
            </nb-list>
        </nb-content>
    </nb-container>
</template>


<script>
import store from "../../store";
export default {
  data: function() {
    return {
      matches: []
    };
  },
  mounted: async function() {
    await store.dispatch("getMatches");
    this.matches = store.state.matches.myMatches;
    console.log(store.state.matches)
     
  },
};
</script>
