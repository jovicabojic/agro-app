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
        </div>
        <button>Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import "firebase/auth";
// import db from "../firebase/firebaseInit"

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("here");
            this.$router.replace({name: "secret"});
          })
          .catch(error => (this.error = error));
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