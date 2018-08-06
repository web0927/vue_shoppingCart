<template>
    <div class="amount_box">
        <a href="javascript:;" class="reduce reSty" @click="fnclickreduce(indkey,index)">-</a>
        <input type="text" :value="num" class="sum">
        <a href="javascript:;" class="plus" @click="fnclickplus(indkey, index)">+</a>
    </div>
</template>

<script>
export default {
    props:['num', 'indkey', 'index'],
    data(){
        return{
            
        }
    },
    mounted(){

    },
    methods:{
        fnclickreduce(i,index){
            this.$store.commit('shoppingCart/addAndSub',{index:index, i:i, str:'jian'});
        },
        fnclickplus(i,index){
            this.$store.commit('shoppingCart/addAndSub',{index:index, i:i, str:'jia'});
        }
    }
}
</script>

<style scoped>
.amount_box{
    margin-top: 20px;
    width: 77px;
    height: 25px;
    position: relative;
}
.amount_box input{
    width: 39px;
    height: 15px;
    line-height: 15px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    left: 18px;
    float: left;
}
.amount_box a{
    float: left;
    height: 23px;
    width: 17px;
    border: 1px solid #e5e5e5;
    background: #f0f0f0;
    text-align: center;
    line-height: 23px;
    color: #444;
    position: absolute;
    top:0;
}
.amount_box a:hover{
    border-color: #ff873e;
    text-decoration: none;
    color: #ff873e;
    z-index: 3;
}

.amount_box .reduce{
    left: 0;
}

.amount_box .reSty{
    color: #cbcbcb;
}
.amount_box .reSty:hover{
    border-right: none;
    border-color: #e5e5e5;
    text-decoration: none;
    color: #cbcbcb;
}

.amount_box .plus{
    border-left-color: transparent;
    right: 0;
}
</style>
