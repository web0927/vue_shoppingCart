let todolist = {
    namespaced:true,
    state:{
        upTodolist:[],
        donTodolist:[]
    },
    getters:{
        trenMsg(state, getters) {
            return state;
        }
    },
    mutations:{
        addTodo(state, action){            //添加数据
            let {pu} = action;

            // let findIndex = state.upTodolist.findIndex( (item) => {      //注：有{}作用域问题需要手动return
            //     return item.text === action.pu.text
            // })

            let findIndex = state.upTodolist.findIndex( item => item.text === action.pu.text)
            if (findIndex === -1) {
                state.upTodolist.push(pu)
            }
            console.log(findIndex);
        },
        removeTodo(state, action){         //删除选中数据
            let {index, watch} = action;

            if (watch) {
                state.donTodolist.splice(index, 1);
            } else {
                state.upTodolist.splice(index, 1);
            }
        },
        changeTodo(state, action){         //输入框内更改相应数据
            let {index, vtext, watch} = action;
            let str = watch ? 'donTodolist' : 'upTodolist';
            state[str][index].text = vtext;
            console.log(state[str][index].text = vtext, vtext);
            
        },
        moveTodo(state, action) {          //移动选中项
            let {isCheck, index} = action;
            if (isCheck) {
                state.donTodolist.push(state.upTodolist[index]);
                state.upTodolist.splice(index, 1);
            } else {
                state.upTodolist.push(state.donTodolist[index]);
                state.donTodolist.splice(index, 1);
            }
        }
    },
    actions:{
        add({commit, state}, action) {
            commit('addTodo', action);
        },
        remove({commit, state}, action) {
            commit('removeTodo', action);
        },
        change({commit, state}, action) {
            commit('changeTodo',action);
        },
        move({commit, state}, action) {
            commit('moveTodo',action);
        }
    }
}

export default todolist;