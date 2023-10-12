import { Form } from './components/Form'
import {useState} from 'react'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John", email: "John Doe@gmail.com" },
    {id:2 , name:"Bob", email:"Bob Doe@gmail.com"},
  ])
  return (
    <div className="bg-ss-blue-500 min-h-screen h-screen w-screen p-0 m-0 flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <section className="bg-ss-gray-500 text-center mb-4 p-4 flex justify-center items-center">
          <h1 className="p-2 text-4xl">
            Welcome to the CrudUser!
          </h1>
        </section>
        <Form user={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default App
