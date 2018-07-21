import Vue from 'vue-native-core'
import Vuex from "vuex"

import API from "./lib/API"

Vue.use(Vuex)


const store = new Vuex.Store({

    state: {

        artists: [],
        matches: [],
        chats: []
    },
    getters: {
        artists(state) {
            return state.artists
        },
        matches(state) {
            return state.matches
        },
        matches(state) {
            return state.chats
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
        },
        async getChats(context) {

            const chats = await API.getChats()
            context.commit("setChats", chats)
        },
    },
    mutations: {
        setArtistUsers(state, artists) {
            state.artists = artists
        },
        addArtist(state, artist) {
            state.artists.push(artist)
        },
        removeArtist(state, artist) {
            let index = state.artists.indexOf(artist)
            state.artists.splice(index, 1)
        },
        setMatches(state, matches) {
            state.matches = matches
        },
        addMatch(state, match) {
            state.matches.push(match)
        },
        removeMatch(state, match) {
            let index = state.matches.indexOf(match)
            state.matches.splice(index, 1)
        },
        setChats(state, chats) {
            state.chats = chats
        },
        addChats(state, chats) {
            state.chats.push(chats)
        },
    }


})

export default store