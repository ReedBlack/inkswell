import Vue from 'vue-native-core'
import Vuex from "vuex"

import API from "./lib/API"

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        artists: []
    },
    getters: {
        artists(state) {
            return state.artists
        }
    },
    actions: {
        async getArtistUsers(context) {

            const artists = await API.getArtistUsers()
            context.commit("setArtistUsers", artists)
        }
    },
    mutations: {
        setArtistUsers(state, artists) {
            state.artists = artists
            // console.log(state.artists, "whatever the fuck")
        },
        addArtist(state, artist) {
            state.artists.push(artist)
        },
        removeArtist(state, artists) {
            const index = state.artists.indexOf(artist)
            state.artists.splice(index, 1)
        }
    }


})

export default store