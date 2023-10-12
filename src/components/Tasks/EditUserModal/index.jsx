/* eslint-disable react/prop-types */
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyles = {
    content: {
        width: '400px',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        padding: '20px',
        background: 'white',
    },
    overlay: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',       
    },
}

export function EditUserModal({ isOpen, closeModal, user, updateUser }) {
    if (!user) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Editar Usuário"
            style={modalStyles}
        >
            <div className="">
                <h2 className="">Editar Usuário</h2>
                <form action="" className="">
                    <div className="">
                        <label htmlFor="name">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={user.name}
                            onChange={(e)=> updateUser({...user,name: e.eventPhase.target.value})}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-mjd bg-ss-gray-300 focus:ring-ss-blue-200" />
                    </div>
                    <div className="">
                        <button
                            onClick={closeModal}
                            className="mr-2 px-4 py-2 text-sm font-medium text-white bg-ss-blue-200 rounded-md hover:bg-ss-blue-100">
                            Fechar
                        </button>
                        <button
                            onClick={()=> updateUser(user)}
                            className="px-4 py-2 text-sm font-medium text-white bg-ss-blue-200 rounded-md hover:bg-ss-blue-100">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

