<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        newsletter-test
      </h1>
      <h2 class="subtitle">
        Test que almacena información en una MongoDB
      </h2>
      <div class="links">
        <input 
          type="email" 
          class="input--green"
          placeholder="Ingrese su email..."
          v-model="email"
        >
        <button
          class="button--green"
          @click="sendPost()"
        >
          SUSCRIBIRSE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
import qs from "querystring"

export default {
  components: {
    Logo
  },
  data() {
    return {
      email: null
    }
  },
  methods: {
    async sendPost() {
      const config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      const form = {
        email: this.email
      }
      console.log(form)
      const response = await axios.post('http://newslettertest.tk/api/newsletter', qs.stringify(form), config )
      console.log(response)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
