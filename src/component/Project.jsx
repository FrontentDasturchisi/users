import React, { useState } from 'react'
import ProjextChild from './ProjextChild'

const Project = () => {
  // let address = "https://youtube.com/@akhrorWeb"
  // let title = "My Jobs Web Developer"


  // const [first, setfirst] = useState("Mahmudbek")
  const [showContent, setShowContent] = useState(true)

  const [events, setEvents] = useState([])

  let newEvent=(event)=>{
    setEvents((prev)=>{
      return[...prev,event]
    })
  }

  // let handlerClick = () => {
  //   setfirst("Maqsudbey")
  // }

  let handlerDelete = (id) => {
    let filteredEvents = events.filter((event) => (
      event.id !== id
    ))
    setEvents(filteredEvents)
  }
  let subtitle="All events well be here"
let title = "Akhror Kingdom  Events"
  return (
    <div className='text-center m-8'>
      {showContent && <button onClick={() => setShowContent(false)} className='mb-8 mt-5 py-1 px-5 bg-red-500 text-white rounded'>Hide Cintent</button>}
      {!showContent && <button onClick={() => setShowContent(true)} className='mb-8 mt-5 py-1 px-5 bg-green-500 ml-5 text-white rounded'>Show Content</button>}

      {showContent && events.map((event, i) => {
        return (
          <div key={i}>
            <h1 className='m-3'>{event.title}</h1>
            <button onClick={() => handlerDelete(event.id)} className=' hover:bg-green-900 mt-5 py-1 px-5 bg-green-500 text-white rounded'>Delete</button>
          </div>
        )
      })}

      {/* <p>Today's data is : {new Date().toDateString()}</p>

      <h2>Random {Math.floor(Math.random() * 5)}</h2>

      <a href={address}>My you tube Link</a> <br /> */}
      {/* <h1 className='text-green-500 mt-8'>My name is {first}</h1>

      <button onClick={handlerClick} className=' hover:bg-green-900 mt-5 py-1 px-5 bg-green-500 text-white rounded'>Click me</button> */}
  <ProjextChild title={title} subtitle={subtitle}/>
    </div>

  )
}

export default Project