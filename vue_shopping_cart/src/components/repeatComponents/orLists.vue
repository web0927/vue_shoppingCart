<template>
    <ul class="order_lists">
        <li class="list_chk">
            <label for="checkbox_2" @click="clickCheck" :class="data.smCheck ? 'mark' : null "></label>
        </li>
        <li class="list_con">
            <div class="list_img"><a href="javascript:;"><img :src="data.img" alt=""></a></div>
            <div class="list_text"><a href="javascript:;">{{data.name}}</a></div>
        </li>
        <li class="list_info"> 
            <p>规格：默认</p>
            <p>尺寸：16*16*3(cm)</p>
        </li>
        <li class="list_price">
            <p class="price">￥{{data.price}}</p>
        </li>
        <li class="list_amount">
            <AmountBox :num='data.number' :indkey="dowIndex" :index='index'/>
        </li>
        <li class="list_sum">
            <p class="sum_price">￥{{data.price*data.number}}</p>
        </li>
        <li class="list_op">
            <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
        </li>
    </ul>
</template>

<script>
import AmountBox from './amountBox.vue'
export default {
    props:['data', 'dowIndex', 'index'],
    mounted(){

    },
    methods:{
        clickCheck(){
            if (this.data.smCheck){
                this.$store.commit('shoppingCart/isSm',{isA:!this.data.smCheck, index:this.index, dowIndex:this.dowIndex});
            } else{
                this.$store.commit('shoppingCart/isSm',{isA:!this.data.smCheck, index:this.index, dowIndex:this.dowIndex});
            }
        }
    },
    components:{
        AmountBox
    }
}
</script>

<style scoped>
.order_lists{
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #e7e7e7;
}
.order_lists:last-child{
    border-bottom: none;
}
.order_lists li{
    float: left;
    height: 100%;
}

.order_lists .list_chk{
    position: relative;
    width: 50px;
}
.order_lists .list_chk input[type="checkbox"]{
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px;
}
.order_lists .list_chk label{
    margin: 20px 0 0 24px;
}

.order_lists .list_con{
    width: 342px;
}
.order_lists .list_con .list_img{
    width: 90px;
    height: 90px;
    margin-top: 20px;
    float: left;
}
.order_lists .list_con .list_img img{
    width: 100%;
    vertical-align: top;
}
.order_lists .list_con .list_text{
    margin: 20px 0 0 10px;
    line-height: 18px;
    width: 200px;
    float: left;
}
.order_lists .list_con .list_text a{
    color: #3c3c3c;
}
.order_lists .list_con .list_text a:hover{
    color: #ff873e;
    text-decoration: underline;
}

.order_lists .list_info{
    width: 252px;
    box-sizing: border-box;
    padding: 20px 0;
}
.order_lists .list_info p{
    color: #9c9c9c;
    line-height: 18px;
    margin-left: 15px;
}
.order_lists .list_price{
    width: 130px;
}
.order_lists .list_price .price{
    margin-top: 20px;
    line-height: 18px;
    font-family: Verdana,Tahoma,arial;
    color: #3c3c3c;
    font-weight: bold;
}
.order_lists .list_amount{
    width: 120px;
}



.order_lists .list_sum{
    width: 140px;
}
.order_lists .list_sum .sum_price{
    line-height: 18px;
    margin-top: 20px;
    font-family: Verdana,Tahoma,arial;
    color: #ff0000;
    font-weight: bold;
}
.order_lists .list_op{
    width: 164px;
}
.order_lists .list_op .del{
    margin-top: 20px;
    line-height: 18px;
}
</style>
