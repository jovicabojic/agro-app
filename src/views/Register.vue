<template>
  <div>
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
        </p>
        <h2>Create your account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" v-model="firstName" placeholder="First Name">
          </div>
          <div class="input">
            <input type="text" v-model="lastName" placeholder="Last Name">
          </div>
          <div class="input">
            <input type="text" v-model="email" placeholder="Email">
          </div>
          <div class="input">
            <input type="text" v-model="username" placeholder="Username">
          </div>
          <div class="input">
            <input type="password" v-model="password" placeholder="Password">
          </div>
          <div v-show="error" class="error">{{errorMsg}}</div>
        </div>
        <button @click.prevent="register">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";
import db from "../firebase/firebaseInit"

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: "",
      password: "",
      error: null,
      errorMsg: ''
    };
  },
  methods: {
    async register() {
      if (
          this.firstName !== '' &&
          this.lastName !== '' &&
          this.username !== '' &&
          this.email !== '' &&
          this.password !== ''
      ) {
        this.error = false
        this.errorMsg = ''
        const firebaseAuth = await firebase.auth()
        const result = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const dataBase = db.collection('users').doc(result.user.uid)
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email
        })
        await this.$router.push({name: 'Home'})
        return;
      }
      this.error = true
      this.errorMsg = 'Please fill out all the fields!'
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>