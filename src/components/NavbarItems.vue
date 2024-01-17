<template>
  <router-link class="navbar-items" to="/login" active-class="active-link">Giriş Yap</router-link>
  <router-link class="navbar-items" to="/register" active-class="active-link">Kayıt Ol</router-link>
  <router-link class="navbar-items" to="/iletisim" active-class="active-link"
    >Çıkış Yap</router-link
  >
</template>

<style>
.active-link {
  background-color: yellow;
  color: white;
}

.navbar-items {
  margin-left: 20px;
  text-decoration: none;
  color: #e5e5e5;
  font-size: 20px;
}
</style>
