<template>
<nb-container :style="{ backgroundColor: '#fff' }">

    <nb-header :style="{height: 50}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Profile')"
            >
              <nb-icon name="arrow-back" />
            </nb-button>
          </nb-left>
         
          
        </nb-header>
         <nb-header :style="{ height: 70}">
         
          <nb-left>
             <nb-thumbnail medium :source="{uri: navigation.getParam('clientImageLink')}" />
          </nb-left>
          <nb-right>
             <nb-thumbnail medium :source="{uri: navigation.getParam('artistImageLink')}" />
          </nb-right>
        </nb-header>
        <Image :source="chatImage" resizeMode="cover" class="imageContainerChat" />
        <nb-content>
           <view :style="{flex:1}" v-for="(comment, index) in chat" :key="index">
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
    <nb-footer>
         <nb-content padder>
            <nb-form left :style="{height:180}">
                <nb-item rounded>
                    <nb-input :onChangeText="submitComment" v-model="comment.chatClient" placeholder="say sumpin" />
                </nb-item>
            </nb-form>
       </nb-content>
           <nb-button right :onPress="submitComment">Send</nb-button>
    </nb-footer>
    </nb-container>
</template>

<script>
import React from "react";
import ScrollView from "react-native";
import store from "../../store";
import chatImage from "../../assets/wallpaperbg.jpg";
import API from "../../lib/API";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      API: API,
      chatImage: chatImage,
      chat: [],
      comment: {
        chatClient: ""
      }
    };
  },
  mounted: async function() {
    await store.dispatch("getChats");
    this.chat = await store.state.chats;
  },
  methods: {
    submitComment: function() {
      this.postComment();
      this.comment = {
        chatClient: ""
      };
    },
    postComment: async function() {
      const postComment = {
        method: "POST",
        body: JSON.stringify(this.comment),
        headers: { "Content-Type": "application/json" }
      };
      await fetch(this.API.CHAT_API_URL, postComment)
        .then(res => res.json())
        .then(resJSON => console.log(resJSON));
    }
  }
};
</script>

<style>
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
</style>