<template>
  <nb-card :style="{ elevation: 3 }">
  
   
          <nb-cardItem>
            <nb-left>
              <nb-body>
                <nb-text>{{artist.name}}</nb-text>
                  <nb-text note>{{artist.shop}}</nb-text> 
              </nb-body>
            </nb-left>
          </nb-cardItem>
          <nb-cardItem cardBody>
            <Image
              :style="{
                resizeMode: 'cover',
                width: null,
                flex: 1,
                height: 300
              }"
    
              :source="{uri: artist.pic_two}"
            />
          </nb-cardItem>
         
        </nb-card>
</template>



<script>

import store from "../../store";
export default {
  
  props: {
    artist: {
      type: Object
    }
  }
};
</script>