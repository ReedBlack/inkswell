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
              :source="{uri: artist.mainPic}"
              :style="{
                resizeMode: 'cover',
                width: null,
                flex: 1,
                height: 300
              }"
    
            />
          </nb-cardItem>
        </nb-card>
</template>



<script>
export default {
  props: {
    artist: {
      type: Object
    }
  },
  data() {
    return {
      pic:
        "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi78fiH65_cAhVo2IMKHcIMAhkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.stylecraze.com%2Farticles%2Fmayan-tattoo-designs%2F&psig=AOvVaw2O7UtpXUpSQItyvJvceVY9&ust=1531700473142503"
    };
  }
};
</script>