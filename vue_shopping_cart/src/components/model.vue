<template>
    <section class="model_bg">
        <section class="my_model">
            <p class="title">删除宝贝<span class="closeModel">X</span></p>
            <p>您确认要删除该宝贝吗？</p>
            <div class="opBtn"><a href="javascript:;" class="dialog-sure">确定</a><a href="javascript:;" class="dialog-close">关闭</a></div>
        </section>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.model_bg{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 999;
    display: none;
}
.my_model{
    position: fixed;
    display: none;
    top:50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -200px;
    z-index: 9999;
    width: 360px;
    height: 120px;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    padding: 20px;
    background: #fff;
}
.my_model .title{
    font-size: 14px;
    color: #3c3c3c;
    font-weight: 700;
    margin-bottom: 20px;
}
.my_model .title .closeModel{
    float: right;
    cursor: pointer;
}
.my_model p{
    line-height:16px;
}
.my_model .opBtn{
    margin-top: 20px;
}
.my_model .opBtn a{
    width: 58px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    border-radius: 1px;
    display: inline-block;
    margin-right: 10px;
    font-weight: 700;
}
.my_model .dialog-sure{
    background: #52a0e5;
    color: #fff;
    border: 1px solid #52a0e5;
}

.my_model .dialog-close{
    background: #fff;
    border: 1px solid #d9d9d9;
    color: #3c3c3c;
}
</style>
