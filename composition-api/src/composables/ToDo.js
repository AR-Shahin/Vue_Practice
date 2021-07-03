import axios from 'axios'
import { reactive, ref } from '@vue/reactivity'
import Helper from './Helper'
const ToDo = () => {
    const item = ref(null)
    const search = ref(null)
    let todos = reactive({data : [],tempData : [],validationErrors : []})
    const {print} = Helper()
    // Get All List
    const fetchToDos = async () => {
        const response = await axios.get(process.env.VUE_APP_BASE_API_URL  + 'todos')
        todos.data = (response.data)
        todos.tempData = (response.data)
    }

    // Add New Item
    const addNewItem = async () => {
        try{
            todos.validationErrors = ''
            let response = await axios.post(process.env.VUE_APP_BASE_API_URL  + 'todos',{
                title : item.value
            })
           todos.data.unshift(response.data)
           item.value = ''
        }catch(err){
            if (err.response.status == 422){
            todos.validationErrors = err.response.data.errors
          }
        } 
    }
     
    // Task done
    const taskDone = async (id,index) => {
        await axios.post(process.env.VUE_APP_BASE_API_URL  + 'todo-toggle/' + id ,{
            flag : 'done'
        })
        todos.data[index].isDone = true
    }
    
    // Task undo
    const taskUndo = async (id,index) => {
        await axios.post(process.env.VUE_APP_BASE_API_URL  + 'todo-toggle/' + id ,{
            flag : 'undo'
        })
        todos.data[index].isDone = false
    }

    const removeTask = (id,index) => {
        if(confirm('Are you sure ?')){
            axios.delete(process.env.VUE_APP_BASE_API_URL  + 'todos/' + id)
            todos.data.splice(index,1)
        }
       
    }

    // search 
    const searchTask = (query) => {
        if(query.key === ''){
            todos.data = todos.tempData
        }else{
            

            print(typeof todos.data)
        }
    }
    return {
        removeTask,taskUndo,taskDone,addNewItem,fetchToDos,todos,item,search,searchTask
    }

}
export default ToDo
