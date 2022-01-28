<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

import firebase from 'firebase'

export default {
  name: 'Signin',
  methods: {
    signin: function () {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(
          result => {
            if (user) {
              console.log(result.user)
            } else {
              alert('有効なアカウントではありません')
            }
          })
    }
  }
}
</script>

<template>
<div>

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

    <div class="signin">
      <h2>Sign in</h2>
      <button @click="signin">Signin</button>
    </div>

  <router-view />
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
