<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
      </p>
      <h2>Login to App</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" v-model="email" placeholder="Email">
        </div>
        <div class="input">
          <input type="password" v-model="password" placeholder="Password">
        </div>
        <div v-show="error" class="error">{{ errorMsg }}</div>
      </div>
      <button @click.prevent="signin">Sign in</button>
    </form>
  </div>

</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: ''
    };
  },
  methods: {
    signin() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({name: 'Home'})
            this.error = false
            this.errorMsg = ''
          }).catch((err) => {
            this.error = true
            this.errorMsg = err.message
      })
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
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

.error {
  color: red;
}
</style>