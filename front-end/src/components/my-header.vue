<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Heroes Database</RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse"
          aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTopCollapse">
          <ul class="navbar-nav ms-auto" >
            <li class="nav-item">
              <RouterLink to="/signin" class="btn btn-secondary">Connexion</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/signup" class="btn btn-secondary">Inscription</RouterLink>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-circle-user"></i> Username
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <RouterLink class="dropdown-item link-dark" to="/profil">Profil</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item link-dark" to="/teams/my-teams">Mes équipes</RouterLink>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-item">
                  <RouterLink class="btn btn-danger" to="/signout">
                    <i class="fa-solid fa-power-off"></i>
                    Déconnexion</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <nav class="navbar navbar-light navbar-expand-md bg-primary-subtle">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBottomCollapse"
          aria-controls="navbarBottomCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarBottomCollapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink to="/heroes" class="nav-link">Héros</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/movies" class="nav-link">Films</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
