<template>
<nb-container :style="{ backgroundColor: '#fff' }">

    <nb-header class="gray" :style="{height: 60, 
            shadowOffset: {  height: 8 },
            shadowColor: 'black',
            shadowOpacity: .8,
            shadowRadius: 10}">
          <nb-left>
            <nb-button
              transparent
              :onPress="() => this.props.navigation.navigate('Matches')"
            >
              <nb-icon class="cream" name="arrow-back" />
            </nb-button>
          </nb-left>
          <nb-body>
            <Image resizeMode="center" :style="{marginTop:65}" :source="headerIcon"  />
          </nb-body>
          <nb-right />
        </nb-header>
        <Image :source="chatImage" resizeMode="cover" class="imageContainerChat" />
         <View :style="{ height: 80}">
         
          <nb-left class="client thumb" :style="{alignSelf: 'flex-start', width:100}">
             <nb-thumbnail large :source="{uri: navigation.getParam('clientImageLink')}" :style="{
            shadowOffset: { width: 5, height: 5 },
            shadowColor: 'black',
            shadowOpacity: 0.7,
            shadowRadius: 5,
           
          }" />
          </nb-left>
          <nb-right class="artist thumb" :style="{alignSelf: 'flex-end', width:100}">
             <nb-thumbnail large :source="{uri: navigation.getParam('artistImageLink')}" />
          </nb-right>
        </View>
        <nb-content :style="{height:400}" >
           <scroll-view :style="{flex:1, marginTop: 10}" v-for="(comment, index) in chat" :key="index">
            <nb-left class="clientComment" :style="{alignSelf: 'flex-start'}" v-if="comment.chatClient">   
        
                <nb-text class="clienttext" >
                {{comment.chatClient}}
                </nb-text>
        
            </nb-left>
            <nb-right class="artistComment" :style="{alignSelf: 'flex-end'}" v-if="comment.chatArtist">
        
                <nb-text class="artisttext">
                {{comment.chatArtist}}
                </nb-text>
                
        
            </nb-right>    
         </scroll-view> 
        </nb-content>
    

            <nb-form left :style="{flex:1, flexDirection: 'row', marginBottom:-325}">
                <nb-item left rounded :style="{alignSelf: 'flex-start', width:280}">
                    <nb-input small note class="inputBg" :style="{color:'silver'}" v-model="comment.chat_client" type="text" placeholder="say sumpin" />
                </nb-item>
                    <nb-button right id="bringUp" :onPress="submitComment" :style="{alignSelf: 'flex-start'}">
                      <nb-text>send</nb-text>
                    </nb-button>
            </nb-form>

  
    </nb-container>
</template>

<script>
import headerIcon from "../../assets/i.png";
import React from "react";
import { ScrollView } from "react-native";
import store from "../../store";
import chatImage from "../../assets/wallpaperbg.jpg";
import socketio from "socket.io-client";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      socket: socketio("http://localhost:4000"),
      headerIcon: headerIcon,
      CHAT_API_URL: "https://inkswell.herokuapp.com/chat",
      chatImage: chatImage,
      chat: [],
      timer: "",
      comment: {
        match_id: 2,
        chat_client: "",
        chat_artist: null
      }
    };
  },
  created: function() {
    this.fetchComments();
    this.timer = setInterval(this.fetchEventsList, 300000);
  },
  mounted: async function() {
    this.socket;
    await store.dispatch("getChats");
    this.chat = await store.state.chats;
  },
  methods: {
    submitComment: async function() {
      await this.socket.emit("chat", this.comment);

      this.socket.on("chat", async comment => {
        await this.chat.concat(this.comment);
      });
      // await this.chat.push(this.comment);
      await this.postComment(this.comment);
      this.comment = {
        match_id: 2,
        chat_client: "",
        chat_artist: null
      };
    },
    cancelAutoUpdate: function() {
      clearInterval(this.timer);
    },
    postComment() {
      return fetch(this.CHAT_API_URL, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: "POST",
        body: JSON.stringify(this.comment)
      }).then(response => response.json());
      this.comment.match_id = 2;
      this.comment.chat_client = "";
      this.comment.chat_artist = null;
      console.log("im working");
    }
  }
};
</script>

<style>
.clienttext {
  color: #fffede;
  font-size: 19;
}
.artisttext {
  font-size: 19;
  color: #202020;
}
#bringUp {
  z-index: 1000;
  background-color: silver;
}
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
  background-color: #202020;
}
.clientComment {
  padding: 9;
  margin: 3;
  margin-left: 7;
  border-color: silver;
  border-width: 1;
  border-radius: 11;
  background-color: #202020;
}
.artistComment {
  padding: 9;
  margin: 3;
  margin-right: 7;
  border-color: #202020;
  border-width: 2;
  border-radius: 11;
  background-color: #fffede;
}
.imageContainerChat {
  margin-top: 0;
  position: absolute;
  z-index: -10;
}
.cream {
  color: #fffede;
}
</style>