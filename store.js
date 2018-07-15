import Vue from 'vue-native-core'
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        "artists": [{
            "id": 1,
            "name": "Elaine Lorey",
            "shop": "Urban Element",
            "hasSwipedRight": true,
            "mainPic": "https://s3.amazonaws.com/inkswell/Elaine1.png",
            "picTwo": "https://s3.amazonaws.com/inkswell/Elaine2.png",
            "picThree": "https://s3.amazonaws.com/inkswell/Elaine3.png"

        }, {
            "id": 2,
            "name": "Brooke Engleheart",
            "shop": "Evoke Tattoos",
            "hasSwipedRight": false,
            "mainPic": "https://s3.amazonaws.com/inkswell/Brooke1.jpg",
            "picTwo": "https://s3.amazonaws.com/inkswell/Brooke2.png",
            "picThree": "https://s3.amazonaws.com/inkswell/Brooke3.png"
        }]

    }
})