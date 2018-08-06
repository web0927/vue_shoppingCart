<template>
    <div class="cartMain_hd">
        <ul class="order_lists cartTop">
            <li class="list_chk">
                <!--所有商品全选-->
                <label for="all"  @click="checkAll" :class='this.$store.state.shoppingCart.getData.allCheck ? "mark" : null'></label>
                全选
            </li>
            <li class="list_con">商品信息</li>
            <li class="list_info">商品参数</li>
            <li class="list_price">单价</li>
            <li class="list_amount">数量</li>
            <li class="list_sum">金额</li>
            <li class="list_op">操作</li>
           
        </ul>
    </div>
</template>

<script>
import InpCheck from './repeatComponents/inpCheck.vue';

export default {
    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{
        checkAll(){
            if (this.$store.state.shoppingCart.getData.allCheck === false) {
                this.$store.commit('shoppingCart/isAll', {isA:!this.$store.state.shoppingCart.getData.allCheck})
            } else if (this.$store.state.shoppingCart.getData.allCheck === true) {
                this.$store.commit('shoppingCart/isAll', {isA:!this.$store.state.shoppingCart.getData.allCheck})
            }
            
        }
    },
    components:{
        InpCheck
    }
}
</script>
<style scoped>
.cartMain_hd{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #3c3c3c;
}
.cartMain_hd .cartTop{
    height: 50px;
}
.cartMain_hd .cartTop .list_chk{
    width: 80px;
    text-indent: 30px;
}
.cartMain_hd .cartTop .list_con{
    width: 312px;
}
.cartMain_hd .cartTop .list_chk label{
    position: absolute;
    left: 10px;
    top:19px;
    margin: 0;
}
.cartMain_hd .cartTop .list_info{
    padding: 0;
    text-indent: 15px;
}
.cartMain_hd .cartTop .list_con{
    text-indent: 140px;
}
.order_lists li{
    float: left;
    height: 100%;
}
.order_lists .list_con{
    width: 342px;
}
.order_lists .list_info{
    width: 252px;
    box-sizing: border-box;
    padding: 20px 0;
}
.order_lists .list_price{
    width: 130px;
}
.order_lists .list_amount{
    width: 120px;
}
.order_lists .list_sum{
    width: 140px;
}
.order_lists .list_op{
    width: 164px;
}
</style>
