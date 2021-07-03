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
              <div>{{ todo.title.toUpperCase() }}</div>
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
             <div class="p-3 pl-8 bg-white shadow-md rounded">
            <h2 class="text-xl">Search</h2>
            <input type="text"
                  @keyup="searchTask"
                   v-model="search"
                   placeholder="Search your Task "
                   class="p-2 mt-4 border rounded w-full">       
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Helper from '../composables/Helper'
import ToDo from '../composables/ToDo'
export default {
  
    setup(){
        const { formatTime ,print } = Helper()

        const {removeTask,taskUndo,taskDone,addNewItem,fetchToDos,todos,item,search,searchTask} = ToDo()

        fetchToDos()
       
        return {
            todos,
            addNewItem,
            item,
            print,
            taskDone,
            taskUndo,
            removeTask,
            formatTime,
            search,
            searchTask
            
        
        }
    }
}
</script>
