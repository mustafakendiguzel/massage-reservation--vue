<template>
  <div class="logo-with-text-inputs">
    <div class="auth-logo">
      <img alt="Vue logo" src="@/assets/working-with-laptop.svg" width="500" height="500" />
    </div>
    <div>
      <div class="input-boxes">
        <div class="input-container">
          <div class="container">
            <div class="input-container-text">
              <input type="text" class="centered-input" placeholder="Email" />
            </div>
            <div class="input-container-text">
              <input type="text" class="centered-input" placeholder="Şifre" />
            </div>
          </div>
        </div>
        <div class="register-container">
          <div class="centered-text">
            Hesabın Yok mu? <router-link to="/register" class="register-link">Kaydol</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2em;
}

.input-container {
  width: 400px;
  height: 400px;
  border: 2px solid white;
  max-width: 400px; /* Maksimum genişlik belirleme */
}

.input-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
}

.register-container {
  width: 400px;
  height: 100px;
  border: 2px solid white;
  max-width: 400px; /* Maksimum genişlik belirleme */
}

.logo-with-text-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8em;
  padding-top: 300px;
}
.text-with-box {
  display: flex;
  gap: 4em;
  align-items: center;
}

.centered-input {
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  width: 70%;
}

.input-container-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.centered-text {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media only screen and (max-width: 768px) {
  .auth-logo {
    display: none;
  }

  .input-container,
  .register-container {
    max-width: 100%;
  }
}
</style>
