<template>
    <div class="bar-wrapper">
        <div class="bar-right">
            <div class="piece">已选商品<strong class="piece_num">{{$store.state.shoppingCart.getData.allNum}}</strong>件</div>
            <div class="totalMoney">共计: <strong class="total_text">{{$store.state.shoppingCart.getData.allPrace}}</strong></div>
            <div class="calBtn"><a href="javascript:;">结算</a></div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    mounted(){
    
    },
    computed:{
  
    }
}
</script>

<style scoped>
.bar-wrapper{
    width: 1200px;
    height: 50px;
    position: fixed;
    bottom: -1px;
    z-index: 99;
    background: #e5e5e5;
}
.bar-wrapper .bar-right{
    float: right;
    color: #3c3c3c;
}
.bar-wrapper .bar-right strong{
    color: #f40;
}

.bar-wrapper .bar-right .piece{
    float: left;
    min-width: 110px;
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .piece .piece_num{
    display: inline-block;
    padding: 0 10px;
    font-weight: 700;
    font-size: 18px;
    font-family: tohoma,arial;
}
.bar-wrapper .bar-right .totalMoney{
    float: left;
    min-width: 100px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .totalMoney .total_text{
    float: right;
    font-weight: 400;
    font-size: 20px;
    font-family: Arial;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 15px;
}
.bar-wrapper .bar-right .calBtn{
    float: left;
}
.bar-wrapper .bar-right .calBtn a{
    display: block;
    width: 120px;
    height: 50px;
    color: #fff;
    background: #B0B0B0;
    cursor: not-allowed;
    font-size: 22px;
    letter-spacing: 5px;
    text-decoration: none;
    line-height: 50px;
    text-align: center;
    border-radius: 2px;
}
.bar-wrapper .bar-right .calBtn a.btn_sty{
    background: #f40;
    cursor: pointer;
}
</style>
