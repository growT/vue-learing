<template>
    <div class="el-input">
        <template>
            <!-- 前置元素 -->
            <input
                class="el-input__inner"
                type="text"
                :value="currentValue"
                ref="input"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput"
            >
        </template>
    </div>
</template>
<script>
// 此版本为2.3.6
  export default {
    name: 'ElInput',

    componentName: 'ElInput',

    inheritAttrs: false,

    data() {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        isOnComposition: false
      };
    },

    props: {
      value: [String, Number],
    },
    watch: {
      'value'(val, oldValue) {
        //没有检测到数据的变化
        this.setCurrentValue(val);
      }
    },

    methods: {
        handleComposition(event) {
            if (event.type === 'compositionend') {
            this.isOnComposition = false;
            this.handleInput(event);
            } else {
            const text = event.target.value;
            const lastCharacter = text[text.length - 1] || '';
            this.isOnComposition = !this.isKorean(lastCharacter);
            }
        },
        handleInput(event) {
            if (this.isOnComposition) return;
            const value = event.target.value;
            this.$emit('input', value);
            this.setCurrentValue(value);
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return
            this.currentValue = value;
        },
        isKorean(text) {
            const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
            return reg.test(text);
        }
    },
  };
</script>
