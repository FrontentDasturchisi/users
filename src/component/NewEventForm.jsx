import React, { useState } from 'react'

const NewEventForm = () => {
    const [showContent, setShowContent] = useState(true)
    const [events, setEvents] = useState([])
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [showModal, setShowModal] = useState(true)
    const [location, setLocation] = useState("fergrna")
  
    let newEvent=(event)=>{
      setEvents((prev)=>{
        return[...prev,event]
      })
    }
    let closeModal = () => {
        setShowModal(false)
    }
    let openModal = () => {
        setShowModal(true)
    }
   

    let handlerSubmit =(e)=>{
      console.log(1);
      location:location
    }

    return (
        <div className='modal-backdrop text-center'>
            {showModal && <div className='modal '>
                <form onSubmit={handlerSubmit} className='new-event-form'>
                    <label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Malumot kiriting' />
                    </label>
                    <label>
                        <input onChange={(e) => setDate(e.target.value)} type="date" />
                    </label>
                    <button className='btn px-4 py-1 bg-yellow-500 rounded'>Submit</button> <br />
                    <label>
                        <span className='text-red-500 pr-2'>Event Location</span>
                        <select onChange={(e)=> setLocation(e.target.value)}>
                            <option value="fergane">Farg'ona</option>
                            <option value="tashkent">Tashknet</option>
                            <option value="london">London</option>
                        </select>
                    </label>
                    {/* <p className='text-2xl text-red-500'>Title:{title}</p> */}
                    {/* <span className='text-2xl text-red-500'>Date: {date}</span> <br /><hr /> */}
                    <button onClick={closeModal} className='px-8 py-2 text-white bg-green-500 rounded mt-5 '>Close</button>
                </form>

            </div>}

            <button onClick={openModal} className='px-8 py-2 text-white bg-red-500 rounded mt-5 '>OPEN</button>

        </div>
    )
}

export default NewEventForm
