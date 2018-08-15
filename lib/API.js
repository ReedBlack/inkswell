const ARTISTS_API_URL = 'https://inkswell.herokuapp.com/artistusers';
const CLIENTS_API_URL = 'https://inkswell.herokuapp.com/clientusers';
const MATCHES_API_URL = 'https://inkswell.herokuapp.com/clientusers/4/matches';
const CHAT_API_URL = 'https://inkswell.herokuapp.com/matches/2/chat';

export default {
    async getArtistUsers() {
        let res = await fetch(ARTISTS_API_URL)

        return res.json()
    },
    async getClientUsers() {
        let res = await fetch(CLIENTS_API_URL)
        return res.json()
    },
    async getMatches() {
        let res = await fetch(MATCHES_API_URL)
        return res.json()
    },
    async getChats() {
        let res = await fetch(CHAT_API_URL)
        return res.json()
    }
}