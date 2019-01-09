<template>
   <div class="single-selector" v-if="showDealerSelector">
        <!-- 顶部的bar条开始 -->
        <div class="single-selector__title__bar" v-if="showDealerTitleBar">
            <div class="go-back__arrow" @click="handleHideSelector('Dealer')">
                <img class="back-img" src="https://ssl-assets.che300.com/feimg/bapp/substitution/left-arrow.png">
            </div>
            <h2 class="title-name">{{dealerSelectorTitle}}</h2>
        </div> 
        <!-- 内容区域 -->
        <div class="single-selector__content">
            <ul class="list_content">
                <li class="list_item" v-for="(item,index) in dealerList" :key="index" @click="handleDealerSelectorListClick(item)">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            //单列选择器--经销商
            showDealerSelector: false, //是否显示
            showDealerTitleBar:  true,//是否显示标题
            dealerSelectorTitle: '选择经销商',//标题
            selectedDealer: null,
            dealerList: [
                {name: '江苏1宝沃汽车服务有限公司', id: '1'},
                {name: '江苏2宝沃汽车服务有限公司', id: '2'},
                {name: '江苏3宝沃汽车服务有限公司', id: '3'},
                {name: '江苏4宝沃汽车服务有限公司', id: '4'},
                {name: '江苏5宝沃汽车服务有限公司', id: '5'},
                {name: '江苏6宝沃汽车服务有限公司', id: '6'},
            ], // 数据
        }
    },
    computed:{ 
    },
    methods: {
       handleDealerSelectorListClick(data) {
            this.selectedDealer = data;
            this.DealerName = data.name;
            this.showDealerSelector = false;
        },
    },
    mounted() {
        
    },
    created() {
    }
}
</script>

<style lang="scss">
    .single-selector {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
}

.single-selector__title__bar {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: .426667rem;
    background-color: #fff;
    border-bottom: .026667rem solid #f0f0f0;
}

.single-selector__title__bar .go-back__arrow {
    position: absolute;
    left: 0;
    top: 0;
    height: 45px;
    width: 50px;
}

.single-selector__title__bar .back-img {
    width: .24rem;
    height: .48rem;
}

.single-selector__title__bar .title-name {
    margin: 0;
    padding: 0;
}

.single-selector__content {
    height: 100%;
    font-size: .426667rem;
    color: #333;
}

.single-selector__content .list_content {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.single-selector__content .list_item {
    padding: .4rem;
    display: flex;
    align-items: center;
    border-bottom: .026667rem solid #f0f0f0;
}
</style>
