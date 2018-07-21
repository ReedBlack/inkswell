<template>
<nb-container :style="{ backgroundColor: '#fff' }">

    <nb-header class="gray" :style="{height: 60}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Profile')"
            >
              <nb-icon class="cream" name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <Image :source="headerIcon"  />
          </nb-body>
          <nb-right />
        </nb-header>
        <Image :source="chatImage" resizeMode="cover" class="imageContainerChat" />
         <View :style="{ height: 80}">
         
          <nb-left class="client thumb" :style="{alignSelf: 'flex-start', width:100}">
             <nb-thumbnail large :source="{uri: navigation.getParam('clientImageLink')}" />
          </nb-left>
          <nb-right class="artist thumb" :style="{alignSelf: 'flex-end', width:100}">
             <nb-thumbnail large :source="{uri: navigation.getParam('artistImageLink')}" />
          </nb-right>
        </View>
        <nb-content>
           <view :style="{flex:1, marginTop: 10}" v-for="(comment, index) in chat" :key="index">
            <nb-left class="clientComment" :style="{alignSelf: 'flex-start'}" v-if="comment.chatClient">   
        
                <nb-text>
                {{comment.chatClient}}
                </nb-text>
        
            </nb-left>
            <nb-right class="artistComment" :style="{alignSelf: 'flex-end'}" v-if="comment.chatArtist">
        
                <nb-text>
                {{comment.chatArtist}}
                </nb-text>
        
            </nb-right>    
         </view> 
        </nb-content>
    
         <nb-content padder>
            <nb-form left :style="{height:180}">
                <nb-item left rounded>
                    <nb-input :onChangeText="submitComment" v-model="comment.chatClient" type="text" placeholder="say sumpin" />
                </nb-item>
           <nb-button right :onPress="submitComment">Send</nb-button>
            </nb-form>
       </nb-content>
  
    </nb-container>
</template>

<script>
import headerIcon from "../../assets/small-sideways.png";
import React from "react";
import ScrollView from "react-native";
import store from "../../store";
import chatImage from "../../assets/wallpaperbg.jpg";
// import API from "../../lib/API";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      headerIcon: headerIcon,
      CHAT_API_URL: "https://inkswell.herokuapp.com/matches/1/chat",
      chatImage: chatImage,
      chat: [],
      comment: {
        matchId: 1,
        chatClient: "",
        chatArtist: null,
        clientId: 5,
        artistID: 3
      }
    };
  },
  mounted: async function() {
    await store.dispatch("getChats");
    this.chat = await store.state.chats;
  },
  methods: {
    submitComment: function() {
      this.postComment(this.comment);
      this.comment = {
        matchId: 1,
        chatClient: "",
        chatArtist: null,
        clientId: 5,
        artistID: 3
      };
    },
    postComment() {
      return fetch(this.CHAT_API_URL, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: "POST",
        body: JSON.stringify(this.comment)
      }).then(response => response.json());
      this.comment.matchId = 1;
      this.comment.chatClient = "";
      this.comment.chatArtist = null;
      this.comment.clientId = 5;
      this.comment.artistId = 3;
      console.log("im working");
    }
  }
};
</script>

<style>
.thumb {
  margin-bottom: 65;
}
.artist {
  margin-top: -87;
  margin-right: 15;
}
.client {
  margin-top: -8;
  margin-left: 15;
}
.gray {
  background-color: gray;
}
.clientComment {
  padding: 8;
  margin: 8;
  border-radius: 11;
  background-color: silver;
}
.artistComment {
  padding: 8;
  margin: 8;
  border-radius: 11;
  background-color: bisque;
}
.imageContainerChat {
  position: absolute;
  z-index: -10;
}
.cream {
  color: #fffede;
}
</style>