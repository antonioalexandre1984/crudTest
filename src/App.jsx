/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Tasks } from './components/Tasks'
import {useState} from 'react'
import { EditUserModal } from './components/Tasks/EditUserModal';

function App() {
    const [users, setUsers] = useState([
    { id: 1, name: "John", email: "JohnDoe@gmail.com" },
    { id: 2, name: "Bob", email: "BobDoe@gmail.com" },
    { id: 3, name: "Mary", email: "maryDoe@gmail.com" },
    ])
  const [selectedRows, setSelectedRows] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleInputClick(i){
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [i]: !prevSelectedRows[i],
    }));
  }

  // Function to add a new user
  function addUser(newUser) {
    setUsers([...users,newUser])  
  }

  // Function to update user
  function updateUser(updateUser) {
    const updatedUserList = users.map(user => user.id === updateUser.id ? updateUser : user);
    setUsers(updatedUserList);
  }

  // Function to delete user
  function deleteUser(userId) {
    const filteredUsersList = users.filter(user => user.id !== userId);
    setUsers(filteredUsersList);
  }

  const openModal = (user) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  }
/* 
  function openModal() {
    setSelectedUser(users);
    setIsModalOpen(true)
  } */

  function closeModal() {
    setIsModalOpen(false);
  }
  
  return (
    <div className="bg-ss-blue-500 min-h-screen h-screen w-screen p-0 m-0 flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <section className="bg-ss-gray-500 text-center mb-4 p-4 flex justify-center items-center">
          <h1 className="p-2 text-4xl">
            Welcome to the CrudUser!
          </h1>
        </section>
        <Tasks
          users={users}
          setUsers={setUsers}
          selectedRows={selectedRows}
          onInputClick={handleInputClick}
          addUser={addUser}
          updateUser={updateUser}
          deleteUser= {deleteUser}
        />
      </div>
      <EditUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        users={selectedUser}
        updateUser={updateUser}
        openModal={openModal}
      />
    </div>
  )
}

export default App
