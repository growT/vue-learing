<template>
   <transition name="c3-toast-pop">
        <div class="c3-toast" v-show="toastVisible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
            <i class="c3-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
            <span class="c3-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ toastMessage }}</span>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            toastVisible: false,
            toastMessage: '',
            iconClass:'',
            toast:null,
        }
    },
    computed:{ 
        customClass() {
            return 'placemiddle';
        }
    },
    methods: {
        showToast(message, duration) {
            var self = this;
            if(this.toastVisible) {
                this.toastVisible = false;
            }
            var toastDuration = duration || 2000;
            this.toastMessage = message;
            this.toastVisible = true;
            setTimeout(() => {
                self.toastVisible = false;
            }, toastDuration);
        },
    },
    mounted() {
        
    },
    created() {
    }
}
</script>

<style lang="scss">

</style>
