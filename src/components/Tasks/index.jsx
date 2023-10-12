/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'


export function Tasks({ users, setUsers, selectedRows, onInputClick,addUser,updateUser,deleteUser,isOpen,openModal }) {
     console.log(users);
    return (
        <div>
            
            <table className="w-full border-collapse border border-ss-gray-300">
            <thead >
                <tr className="bg-ss-gray-200">
                <th className="border border-black p-2">Status</th>
                <th className="border border-black p-2">ID</th>
                <th className="border border-black p-2">Name</th>
                <th className="border border-black p-2">Email Address</th>
                <th className="border border-black p-2">Actions</th>
                </tr>
                </thead>
                {users.map((user,i) => {
                    return (
                        <tbody className="">
                            <tr key={user.id}className="bg-ss-gray-200">
                            <td className="border border-black p-2 text-center w-2">
                            <input
                                        type="checkbox" className="form-checkbox h-4 w-4 text-ss-blue-300"
                                        onClick={()=> onInputClick(i)}
                                        />
                            
                            </td>
                            <td className={`border border-black p-2 text-center ${selectedRows[i] ? " text-ss-gray-500 bg-pink-500" : "bg-ss-gray-200"}`}>{user.id}</td>
                                <td className={`border border-black p-2 text-center ${selectedRows[i] ? " text-ss-gray-500 bg-pink-500" : "bg-ss-gray-200"}`}>
                                    {user.name}
                                </td>
                            <td className={`border border-black p-2 text-center ${selectedRows[i] ? " text-ss-gray-500 bg-pink-500" : "bg-ss-gray-200"}`}>{user.email}</td>
                            <td className={`border border-black p-2 text-center ${selectedRows[i] ? " text-ss-gray-500 bg-pink-500" : "bg-ss-gray-200"}`}>
                                <div className="flex justify-center items-center p-2 gap-2">
                                        <button
                                            onClick={()=> openModal(user)}
                                        >
                                            
                                        <FaEdit size={20} color="#008EFA" />
                                    </button>
                                        <button
                                             onClick={()=> deleteUser(user.id)}
                                        >
                                        <FaTrash size={16} color="#FF3D54" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>)
                })}
           
            </table>
            <button
                onClick={isOpen}
                /* onClick={() => addUser({
                    id: Math.max(...users.map((user) => user.id)) + 1,
                    name: "Novo Usuário",
                    email: "novousuario@gmail.com",
                    })} */
                className="bg-ss-blue-200 mt-2 transition hover:bg-ss-blue-100 font-bold py-2 px-8 rounded">
            <FiUserPlus size={24}/>
                </button>
        </div>
    )
}