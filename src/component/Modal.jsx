import React, { useState } from 'react'

const Modal = () => {
  const [showModal, setShowModal] = useState(true )
  let closeModal =()=>{
    setShowModal(false)
  }
let openModal =()=>{
  setShowModal(true)
}
  return (
    <div className='modal-backdrop'>
     {showModal &&  <div className='modal text-center'>
      <h2 className='text-2xl font-semibold'>Akhror Soliyev Youtebe Channel</h2> 
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, ab temporibus asperiores reiciendis ea quos perspiciatis! Molestias eaque aperiam numquam facere debitis voluptatum ullam eos. Pariatur iure recusandae esse blanditiis.</span> <br />
      <button onClick={closeModal} className='px-8 py-2 text-white bg-green-500 rounded mt-5 '>Close</button>
      </div>}
      <button onClick={openModal} className='px-8 py-2 text-white bg-red-500 rounded mt-5 '>Close</button>

    </div>
  )
}

export default Modal