<script setup lang="ts">
import UserInput from '@/components/UserInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import SubmitButton from '@/components/SubmitButton.vue'
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
                <UserInput input-desc="Email" />
              </div>
            </div>

            <div class="flex justify-center items-center w-full">
              <div>
                <div class="flex flex-col justify-center items-center">
                  <div class="text-center">
                    <SubmitButton
                      class="hover:bg-green-600 w-36 hover:!text-white"
                      button-desc="Doğrulama Yolla"
                    />
                  </div>
                </div>
              </div>
            </div>
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
