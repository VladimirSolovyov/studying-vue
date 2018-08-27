<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link to="/" class="navbar-brand">
        Vue cli app
      </router-link> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/" exact>
            <a class="nav-link">
              Главная
            </a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/Users">
            <a class="nav-link">
              Список пользователей
            </a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/Add">
            <a class="nav-link">
              Добавление пользователей
            </a>
          </router-link>
        </ul>
      </div>
</template>

<style lang="less">
#app {
  margin-top: 50px;
}
</style>
