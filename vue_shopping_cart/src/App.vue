<template>
  <div id="app">
    <section class="cartMain">
        <Header />
        <ContentArea v-for="(item, index) in $store.state.shoppingCart.getData.data" :key="index" :data='item' :index='index'/>
        <!--底部-->
        <FooterBar />
    </section>
    <Model />
  </div>
</template>

<script>
import ContentArea from './components/contentArea.vue'; //中间内容区
import Header from './components/header.vue';           //头部
import FooterBar from './components/footerBar.vue';     //底部价钱
import Model from './components/model.vue';             //模态框
import axios from 'axios';
import {mapActions} from 'vuex'

export default {
  name: 'App',
  data(){
      return {

      }
  },
  mounted(){
      axios.get('/api/list').then((res) => {
            // this.$store.commit('shoppingCart/getData', {data:res.data});
            this.getData({data:res.data});
        });
        console.log(this)

  },
  methods:{
       ...mapActions('shoppingCart', ['getData', 'addAndSub'])
  },
  components: {
    ContentArea,
    Header,
    FooterBar,
    Model
  }
}
</script>

<style>
@import url('assets/css/reset.css');
html,body{
    position: relative;
    width: 100%;
    min-height: 950px;
}
input[type="checkbox"]{
    display: none;
}
label{
    position: relative;
    display: inline-block;
    z-index: 1;
    border: 1px solid #b8b8b8;
    margin-left: 10px;
    border-radius: 1px;
    width: 12px;
    height: 12px;
    cursor: pointer;
}
label.mark{
    background: url("./assets/images/mark1.png") no-repeat -1px -1px;
    
}

a:hover{
    color: #ff873e;
    text-decoration: underline;
}



.cartMain{
    position: relative;
    width: 1200px;
    min-width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 0px 100px;
    min-height: 210px;
}
/*购物车头部*/







/*商品列表*/



/*底部总计算价*/


/*自己定义的模态框*/


</style>
