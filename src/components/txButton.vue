<template>
  <div class="tx-button">
      <button class="btn" @click="handleBtnClick" ref="childButton">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
    name: 'app',
    props: {
        buttonText: {
            type: String,
            default: '按钮',
        }
    },
   
    methods: {
        handleBtnClick() {
            this.$emit('handleBtnClick');
        }
    },
    mounted() {
        console.log(this.$refs.childButton)
    },
    update() {
        console.log('重新渲染了');
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        font-size: 16px;
        width: 100px;
        height: 30px;
        line-height: 30px;
    }
</style>
