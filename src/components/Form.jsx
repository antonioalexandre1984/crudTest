/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'

export function Form({ user,setUsers }) {
    console.log(user);
    return (
        <>
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
            <tbody className="">
                <tr className="bg-ss-gray-200">
                <td className="border p-2 flex items-center justify-center">
                    <input type="checkbox" className="form-checkbox h-6 w-6 text-ss-blue-300" />
                </td>
                        <td className="border border-black p-2 text-center">{user.id}</td>
                <td className="border border-black p-2 text-center">{user.name}</td>
                <td className="border border-black p-2 text-center">{user.email}</td>
                <td className="border border-black p-2 text-center">
                    <div className="flex justify-center items-center p-2 gap-2">
                    <button>
                        <FaEdit size={20} color="#008EFA" />
                    </button>
                    <button>
                        <FaTrash size={16} color= "#FF3D54"/>
                    </button>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
            <button className="bg-ss-blue-200 mt-2 transition hover:bg-ss-blue-100 font-bold py-2 px-8 rounded">
            <FiUserPlus size={24}/>
                </button>
        </>
    )
}