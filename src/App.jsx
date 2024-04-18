import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl bg-red-400 w-fit mx-auto px-4 py-2 rounded-lg">Trying React Redux</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App