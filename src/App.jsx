import React, { useState } from 'react'
import Modal from './component/Modal'
import NewEventForm from './component/NewEventForm'
import Project from './component/Project'
import Footer from './component2/Footer'
import Navbar from './component2/Navbar'
import NewUser from './component2/NewUser'
import UserList from './component2/UserList'


const App = () => {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  let handlerDelete = (id)=>{
    let filteredEvent = users.filter((user)=>{
        return user.id !== id
    })
    setUsers(filteredEvent)
}
let closeModal =(e)=>{
  if(e.targer === "overlay") setShowModal(false)
}
let addUser =(user)=>{
  setUsers((prev)=>{
    return [...prev,user]
  })
  setShowModal(false)
}
  return (
    <div>
   <div onClick={closeModal}>
       {/* <Project/> */}
      {/* <Modal/> */}
      {/* <NewEventForm/> */}
      <Navbar usersLengs={users.length} />
      <main>
        <div className='no-users'>
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} handlerDelete={handlerDelete}/>
      </main>
      { showModal &&<NewUser setShowModal={setShowModal} addUser={addUser}/>}
      <button onClick={()=>setShowModal(true)} className='px-8 py-3 text-white bg-red-500 rounded mt-[150px] ml-8'>Creat User</button>
      <Footer /> 
   </div>
    </div>
  )
}

export default App
