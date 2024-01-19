<template>
  <router-link
    class="navbar-items ml-5 no-underline text-[#e5e5e5] text-lg"
    to="/login"
    active-class="active-link"
    >Giriş Yap</router-link
  >
  <router-link
    class="navbar-items ml-5 no-underline text-[#e5e5e5] text-lg"
    to="/register"
    active-class="active-link"
    >Kayıt Ol</router-link
  >
  <router-link
    class="navbar-items ml-5 no-underline text-[#e5e5e5] text-lg"
    to="/iletisim"
    active-class="active-link"
    >Çıkış Yap</router-link
  >
</template>

<style>
.active-link {
  color: white;
}

.navbar-items:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
