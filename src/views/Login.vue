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
      </div>
      <button>Sign in</button>
    </form>
  </div>

</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";
import "@/firebase/firebaseInit";


export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      user: {}
    };
  },
  methods: {
    pressed() {
      firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(response => {
            this.user = response.data
            this.$router.replace({ name: "Home" });
          })
          .catch(error => {
            this.error = error;
          });
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