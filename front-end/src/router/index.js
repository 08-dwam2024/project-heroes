import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user.js'

// 📁 Vues publiques
import HomeView from '../views/HomeView.vue'
import ListHeroes from '../views/ListHeroes.vue'
import ListMovies from '../views/ListMovies.vue'
import TeamsOfficial from '../views/TeamsOfficial.vue'
import TeamsUsers from '../views/TeamsUsers.vue'

// 📁 Vues pour invités uniquement
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

// 📁 Vues protégées (authentification requise)
import ProfilView from '../views/ProfilView.vue'
import SignOutView from '../views/SignOutView.vue'
import MyTeamsView from '../views/MyTeamsView.vue'

const routes = [
  // ✅ Publiques
  { path: '/', name: 'home', component: HomeView },
  { path: '/heroes', name: 'list-heroes', component: ListHeroes },
  { path: '/movies', name: 'list-movies', component: ListMovies },
  { path: '/teams', name: 'teams-official', component: TeamsOfficial },
  { path: '/teams/from-users', name: 'teams-users', component: TeamsUsers },

  // 🚫 Réservées aux utilisateurs non connectés
  { path: '/signin', name: 'sign-in', component: SignInView, meta: { requiresGuest: true } },
  { path: '/signup', name: 'sign-up', component: SignUpView, meta: { requiresGuest: true } },

  // 🔐 Réservées aux utilisateurs connectés
  { path: '/profil', name: 'profil', component: ProfilView, meta: { requiresAuth: true } },
  { path: '/signout', name: 'sign-out', component: SignOutView, meta: { requiresAuth: true } },
  { path: '/teams/my-teams', name: 'my-teams', component: MyTeamsView, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.loadFromStorage()

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next({ name: 'sign-in' })
  } else if (to.meta.requiresGuest && userStore.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
