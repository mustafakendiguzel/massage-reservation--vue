<!-- CenteredMassageIntro.vue -->
    
<template>
    <div class="contact-animation" ref="animationContainer">
        <div class="bright-white centered-title">
            <h1>Lotus Masaj</h1>
        </div>
        <Vue3Lottie :animation-data="AnimationJson" :width="animationWidth" :height="animationHeight"/>
    </div>
</template>

<script lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import AnimationJson from './animations/animation.json';

export default {
    data() {
        return {
            animationWidth: 500,
            animationHeight: 500,
            AnimationJson,
        };
    },

    components: { Vue3Lottie },

    mounted() {
        this.updateAnimationSize();
        window.addEventListener('resize', this.updateAnimationSize);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.updateAnimationSize);
    },

    methods: {
        updateAnimationSize() {
            const containerWidth = this.$refs.animationContainer.clientWidth;
            // İhtiyacınıza göre burada bir kontrol ekleyebilirsiniz.
            // Örneğin, belirli bir genişlikten küçükse boyutları güncelleme.
            if (containerWidth < 600) {
                this.animationWidth = 300; // veya başka bir değer
                this.animationHeight = 300; // veya başka bir değer
            } else {
                this.animationWidth = 500;
                this.animationHeight = 500;
            }
        },
    },
};
</script>

<style scoped>
.contact-animation {
    margin-top: 100px;
}

.centered-title {
    display: flex;
    justify-content: center;
}

.bright-white {
    color: #e5e5e5; /* Replace with a brighter shade of white if desired */
}
</style>
