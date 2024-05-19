import React, { useState } from 'react'
import "./NewUser.css"
// import { v4 as uuidv4 } from "uuid"
const NewUser = ({ setShowModal,addUser }) => {
    const [user, setUser] = useState({
        id: 2,
        image: "",
        firstName: "",
        lastName: "",
        age: null,
        from: "",
        job: "",
        gender: ""
    })
    let handlerSubmit = (e) => {
        e.preventDefault()
        addUser(user);
    }
    return (
        <div className='modal-wrapper'>
            <div className="overlay">
                <div className="modal">
                    <h2>Create New User</h2>
                    <form onSubmit={handlerSubmit}>
                        <label>
                            <span>Image URL:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, image: e.target.value }
                                })
                            }} type="url" required />
                        </label>
                        <label>
                            <span>First Name:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, firstName: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label>
                            <span>Last Name:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, lastName: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label>
                            <span>Age</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, age: e.target.value }
                                })
                            }} type="number" required />
                        </label>
                        <label>
                            <span>From:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, from: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label>
                            <span>Job:</span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, job: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <div className='gender'>
                            <span>Gender:</span>
                            <label>
                                <small>Male</small>
                                <input onChange={(e) => {
                                    setUser((prev) => {
                                        return { ...prev, gender: e.target.value }
                                    })
                                }} type="radio" name="gender" value="male" />
                            </label>
                            <label>
                                <small>Famele</small>
                                <input onChange={(e) => {
                                    setUser((prev) => {
                                        return { ...prev, gender: e.target.value }
                                    })
                                }} type="radio" name="gender" value="Famale" />
                            </label>
                        </div>
                        <button type='submit' className='modal-btn bg-green-500 mt-0'>Submit</button>
                        <button onClick={() => setShowModal(false)} className="px-5 py-2 bg-green-500 rounded text-white ml-[65px]">Close Modal</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewUser