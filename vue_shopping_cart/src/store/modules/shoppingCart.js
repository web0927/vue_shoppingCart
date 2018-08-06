import axios from 'axios';
let shoppingCart = {
    namespaced:true,
    state:{
        getData:[]
    },
    getters:{
        trenMsg(state, getters) {
            return state;
        }
    },
    mutations:{
        getData(state, action){            //添加数据
            state.getData = action.data
        },
        isAll(state, action){              //全选框
            state.getData.allCheck = action.isA
            if (state.getData.allCheck === true) {
                state.getData.data.forEach( (item, index) => {
                    item.partCheck = true;
                    item.list.forEach( (item,jndex) => {
                        item.smCheck = true;
                    })
                })
            } else {
                state.getData.data.forEach( (item, index) => {
                    item.partCheck = false;
                    item.list.forEach( (item,jndex) => {
                        item.smCheck = false;
                    })
                })
            }
        },
        isPart(state, action){          //模块局部全选框
            let {isA, index} = action;
            state.getData.data[index].partCheck = isA;
            if (state.getData.data[index].partCheck === true) {
                state.getData.data[index].list.forEach((item, index) => {
                    item.smCheck = true;
                })
            } else {
                state.getData.data[index].list.forEach((item, index) => {
                    item.smCheck = false;
                })
            }
        },
        isSm(state, action){           //单条数据复选框
            let {isA, index,dowIndex} = action;
            console.log(isA, index, dowIndex);
            state.getData.data[index].list[dowIndex].smCheck = isA;
            
        },
        addAndSub(state, action) {         //商品数量
            let {index, i, str} = action;
            if (str == 'jian'){
                if (state.getData.data[index].list[i].number >= 1) {
                    state.getData.data[index].list[i].number -= 1;
                }
            } else if (str == 'jia'){
                state.getData.data[index].list[i].number += 1;
            }
            console.log(state.getData.data[index].list[i].number);
            
        }
        
    },
    actions:{
        getData({commit, state}, action) {  //初始化数据
            commit('getData', action)
        },
        isAll({commit, state}, action ){    //全选框
            commit('isAll', action);
        },
        addAndSub({commit, state}, action) {    //数量加减
            commit('addAndSub',action);
        },
        isPart({commit, state}, action) {       //局部选中框
            commit('isPart', action);
        },
        isSm({commit, state}, action) {         //单条选中框
            commit('isSm', action);
        },
    }
}

export default shoppingCart;