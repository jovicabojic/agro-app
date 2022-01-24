import db from './../../firebase/firebaseInit'
import firebase from 'firebase/app';

const state = {
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null
}

const getters = {}

const mutations = {
    updateUser(state, payload) {
        state.user = payload
    },
    setProfileInfo(state, doc) {
        state.profileId = doc.id
        state.profileEmail = doc.data().email
        state.profileFirstName = doc.data().firstName
        state.profileLastName = doc.data().lastName
        state.profileUserName = doc.data().username

    },
    setProfileInitials(state) {
        state.profileInitials =
            state.profileFirstName.match(/(\b\S)?/g).join("") +
            state.profileLastName.match(/(\b\S)?/g).join("")
    }
}

const actions = {
    async getCurrentUser({commit}) {
        const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid)
        const dbResults = await dataBase.get()
        commit('setProfileInfo', dbResults)
        commit('setProfileInitials')
        console.log(dbResults)
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}

