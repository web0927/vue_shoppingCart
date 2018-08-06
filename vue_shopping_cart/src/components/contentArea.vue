<template>
    <div class="cartBox">
            <div class="shop_info">
                <div class="all_check">
                    <!--店铺全选-->
                    <label for="shop_a" @click='checkFn()' :class=" + data.partCheck ? 'mark' : null"></label>
                </div>
                <div class="shop_name">
                    店铺：<a href="javascript:;">{{data.title}}</a>
                </div>
            </div>
            <div class="order_content">
                <OrLists v-for="(item, key) in data.list" :key="key" :data='item' :index='index' :dowIndex='key'/>
            </div>
        </div>
</template>

<script>
import OrLists from './repeatComponents/orLists.vue';


export default {
    props:['data','index'],
    data(){
        return {
            
        }
    },
    mounted(){

    },
    methods:{
       
        checkFn(){
            // if (this.$store.state.shoppingCart.getData.data.partCheck === true) {
            //     this.$store.commit('shoppingCart/isPart', {isA:!this.$store.state.shoppingCart.getData.data.partCheck, index:index});
            // } else if(this.$store.state.shoppingCart.getData.data.partCheck === false) {
            //     this.$store.commit('shoppingCart/isPart', {isA:!this.$store.state.shoppingCart.getData.data.partCheck, index:index});
            // }
            // if (this.$store.state.shoppingCart.getData.data[this.index].partCheck) {
            //     this.$store.commit('shoppingCart/isPart', {isA:!this.$store.state.shoppingCart.getData.data[this.index].partCheck, index:this.index})
            // } else {
            //     this.$store.commit('shoppingCart/isPart', {isA:!this.$store.state.shoppingCart.getData.data[this.index].partCheck, index:this.index})
            // }
            if (this.data.partCheck){
                this.$store.commit('shoppingCart/isPart',{isA:!this.data.partCheck, index:this.index});
            } else{
                this.$store.commit('shoppingCart/isPart',{isA:!this.data.partCheck, index:this.index});
            }
        }
    },
    components:{
        OrLists,
    }
}
</script>
<style scoped>
.cartBox{
    width: 100%;
    margin-bottom: 15px;
}
.cartBox .shop_info{
    position: relative;
    width: 100%;
    height: 38px;
    background-color: #fff;
    line-height: 38px;
    vertical-align: baseline;
}
.cartBox .shop_info .all_check{
    position: relative;
    float: left;
    width: 30px;
    height: 38px;
}

.cartBox .shop_info .all_check input[type="checkbox"]{
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px;
}
.cartBox .shop_info .all_check .shop{
    position: absolute;
    top:13px;
}
.cartBox .shop_info .shop_name{
    float: left;
}
.cartBox .order_content{
    border: 1px solid #ccc;
}
.cartBox .order_content a{
    display: block;
}
</style>
