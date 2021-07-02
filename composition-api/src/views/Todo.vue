<template>
  <div class="container mx-auto">
    <h1 class="mt-8 text-2xl text-center mb-3">Todos</h1>
    <hr class="border m-3 ">
    <div class="mt-3">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 "
             style="height: 500px">
         <div v-if="todos.length" class="space-y-4 px-1">
              <div v-for="(todo,index) in todos" :key="todo"
               class="p-8 bg-white shadow-md rounded flex items-center justify-between"
                :class="{'bg-green-200': todo.isDone}"
               >
            <div>
              <div>{{ todo.title }}</div>
              <div class="text-gray-500 text-sm">{{ todo.time }}</div>
            </div>
            <div class="space-x-2">
              <button class="px-2 text-red-600"
                    @click="removeTask(index)"
                      title="Remove todo">&times;</button>
              <button v-if="!todo.isDone"
                      class="px-2 text-green-600"
                    @click="taskDone(index)"
                      title="Mark as done">&check;</button>
              <button  v-if="todo.isDone"
                      class="px-2 text-orange-600"
                        @click="taskUndo(index)"
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
                   
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    setup(){
        const item = ref(null)
        let todos = reactive([
            {id:1,title : 'One',isDone : true,time : new Date().toString()}
        ])

        const addNewItem = () => {
            todos.unshift({
                id : Math.floor(Math.random() * 100),
                title : item.value,
                isDone : false,
                time : new Date().toString()
            })
            item.value = ''
        }

        const taskDone = (index) => {
            todos[index].isDone = true
        }

        const taskUndo = (index) => {
            todos[index].isDone = false
        }

        const removeTask = (index) => {
            if(confirm('Are you sure ?')){
                todos.splice(index,1)
            }
           
        }

        const print = (e) => console.log(e)
        return {
            todos,
            addNewItem,
            item,
            print,
            taskDone,
            taskUndo,
            removeTask
        }
    }
}
</script>
