<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)

const userStore = useUserStore()
const router = useRouter()

const handleSubmit = async () => {
  error.value = null
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })

    if (!response.ok) {
      const err = await response.json()
      throw new Error(err.message || 'Erreur de connexion')
    }

    const data = await response.json()
    userStore.login(data.user, data.token)
    router.push('/profil') // ou page d'accueil
  } catch (err) {
    error.value = err.message
  }
}
</script>

<template>
  <h1>Inscription</h1>
  <div class="container-sm">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Adresse e-mail</label>
        <input type="email" id="email" class="form-control" v-model="email" required />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" id="password" class="form-control" v-model="password" required />
      </div>

      <button type="submit" class="btn btn-primary w-100">Se connecter</button>

      <div v-if="error" class="alert alert-danger mt-3">
        {{ error }}
      </div>
    </form>
  </div>

</template>
