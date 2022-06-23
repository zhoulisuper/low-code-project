//Store组件下的index.js组件
import {action, observable,makeObservable} from 'mobx'

class AppState {    
    //注：新版本中不通过constructor绑定，
    //	 被观察对象变化时不会更新渲染组件（坑）
    constructor() {
        makeObservable(this)
    }
    @observable todos = [];
    
    @action addTodos(todo){
        this.todos.push(todo);
    }
    @action deleteTodos(){
        this.todos.pop();
    }
    @action resetTodos(){
        this.todos = [];
    }
}
const store = new AppState();

export default store;
