import Vue from 'vue-native-core'
import Vuex from "vuex"

import API from "./lib/API"

Vue.use(Vuex)


const store = new Vuex.Store({

    state: {

        artists: [],
        matches: []
    },
    getters: {
        artists(state) {
            return state.artists
        },
        matches(state) {
            return state.matches
        }
    },
    actions: {
        async getArtistUsers(context) {

            const artists = await API.getArtistUsers()
            context.commit("setArtistUsers", artists)
        },
        async getMatches(context) {

            const matches = await API.getMatches()
            context.commit("setMatches", matches)
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
            let index = state.artists.indexOf(artist)
            state.artists.splice(index, 1)
        },
        setMatches(state, matches) {
            state.matches = matches
            // console.log(state.artists, "whatever the fuck")
        },
        addMatch(state, match) {
            state.matches.push(match)
        },
        removeMatch(state, matches) {
            let index = state.matches.indexOf(match)
            state.matches.splice(index, 1)
        }
    }


})

export default store