<template>
  <div class="el-input">
      <input
        type="text"
        :value="nativeInputValue"
        @input="handleInput"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        ref="input"
      >
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            isOnComposition: false,
        }
    },
    props: {
       value:  [String, Number],
    },
    watch: {
        value(newVal,oldVal) {
            console.log('3',newVal);
            console.log('30',oldVal);
        }
    },
    computed: {
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : this.value;
        },
    },
    methods: {
        handleComposition(event) {
            if (event.type === 'compositionstart') {
            this.isOnComposition = true;
            }
            if (event.type === 'compositionend') {
            this.isOnComposition = false;
            this.handleInput(event);
            }
        },
        handleInput(event) {
            if (this.isOnComposition) return;
            if (event.target.value === this.nativeInputValue) return;
            this.$emit('input', event.target.value);
            this.$nextTick(() => { this.$refs.input.value = this.value; });
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
