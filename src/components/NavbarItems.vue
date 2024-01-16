<template>
  <div class="navbar-items">
    <router-link to="/login" active-class="active-link">Giriş Yap</router-link>
    <router-link to="/register" active-class="active-link">Kayıt Ol</router-link>
    <router-link to="/iletisim" active-class="active-link">Çıkış Yap</router-link>
  </div>
</template>

<style>
.active-link {
  background-color: yellow;
  color: white;
}

.navbar-items a {
  margin-left: 20px;
  text-decoration: none;
  color: #e5e5e5;
  font-size: 20px;
}
</style>
