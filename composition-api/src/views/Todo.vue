<template>
  <div class="container mx-auto">
    <h1 class="mt-8 text-2xl text-center mb-3">Todos</h1>
    <hr class="border m-3 ">
    <div class="mt-3">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 "
             style="height: 500px">
             <!-- {{  todos}} -->
         <div v-if="todos.data.length" class="space-y-4 px-1">
              <div v-for="(todo,index) in todos.data" :key="todo"
               class="p-8 bg-white shadow-md rounded flex items-center justify-between"
                :class="{'bg-green-200': todo.isDone}"
               >
            <div>
              <div>{{ todo.title }}</div>
              <!-- {{ $day(todo.created_at).format('DD-MM-YY hh:mma') }} -->
              <div class="text-gray-500 text-sm">{{ formatTime(todo.created_at) }}</div>
            </div>
            <div class="space-x-2">
              <button class="px-2 text-red-600"
                    @click="removeTask(todo.id,index)"
                      title="Remove todo">&times;</button>
              <button v-if="!todo.isDone"
                      class="px-2 text-green-600"
                    @click="taskDone(todo.id,index)"
                      title="Mark as done">&check;</button>
              <button  v-if="todo.isDone"
                      class="px-2 text-orange-600"
                        @click="taskUndo(todo.id,index)"
                      title="Mark as undone">&#8630;</button>
            </div>
          </div>
         </div>
          <div v-else
               class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm">
            You dont have any task to do.
          </div>
        </div>

        <div class="col-span-6">
          <div class="p-8 bg-white shadow-md rounded">
            <h2 class="text-xl">Add a todo</h2>
            <input type="text"
                  @keydown.enter="addNewItem"
                   v-model="item"
                   placeholder="Enter your Task "
                   class="p-2 mt-4 border rounded w-full">
                   <span v-if=" todos.validationErrors.title" class="text-red-500">{{ todos.validationErrors.title[0]}}</span>
                  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import * as moment from "moment/moment";
import axios from 'axios'
import { reactive, ref } from '@vue/reactivity'
export default {
  
    setup(){
        const item = ref(null)
        let todos = reactive({data : [],validationErrors : []})

        // Get All List
        const fetchToDos = async () => {
            const response = await axios.get(process.env.VUE_APP_BASE_API_URL  + 'todos')
            todos.data = (response.data)
        }
        fetchToDos()

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
        // Format time
    const formatTime = (e) => moment(e).format('MMMM Do YYYY, h:mm:ss a');
        const print = (e) => console.log(e)
        return {
            todos,
            addNewItem,
            item,
            print,
            taskDone,
            taskUndo,
            removeTask,
            formatTime
            
        
        }
    }
}
</script>
