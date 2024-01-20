<script setup lang="ts">
import UserInput from '@/components/UserInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import SubmitButton from '@/components/SubmitButton.vue'
import { UserOutlined, PhoneOutlined } from '@ant-design/icons-vue'
</script>
<template>
  <div class="pt-20 flex justify-center items-center gap-40">
    <div class="auth-logo">
      <img alt="Vue logo" src="@/assets/working-with-laptop.svg" width="500" height="500" />
    </div>
    <div>
      <div class="input-boxes flex flex-col items-center gap-8">
        <div
          class="input-container w-96 h-96 b-2 border-2 rounded-s-2xl border-solid border-white max-w-96"
        >
          <div class="container flex flex-col justify-center items-center h-full gap-8 pt-8">
            <div class="flex justify-center items-center w-full">
              <div class="text-center w-2/3">
                <a-input placeholder="Ad Soyad">
                  <template #prefix>
                    <UserOutlined />
                  </template>
                </a-input>
              </div>
            </div>

            <div class="flex justify-center items-center w-full">
              <div class="text-center w-2/3">
                <UserInput input-desc="Email" />
              </div>
            </div>
            <div class="flex justify-center items-center w-full">
              <div class="text-center w-2/3">
                <a-input placeholder="Telefon">
                  <template #prefix>
                    <PhoneOutlined />
                  </template>
                </a-input>
              </div>
            </div>

            <div class="flex justify-center items-center w-full">
              <div class="text-center w-2/3">
                <PasswordInput pass-desc="Şifre" />
              </div>
            </div>

            <div class="flex justify-center items-center w-full">
              <div>
                <div class="flex flex-col justify-center items-center">
                  <div class="text-center">
                    <SubmitButton
                      class="hover:bg-green-600 w-36 hover:!text-white"
                      button-desc="Kayıt Ol"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="register-container rounded-s-2xl w-96 h-24 b-2 border-2 border-solid border-white max-w-96"
        >
          <div class="flex text-center justify-center items-center h-full">
            Hesabın var mı ?<router-link to="/login" class="register-link">Giriş Yap</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
