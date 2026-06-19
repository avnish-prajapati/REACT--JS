import React, { useState } from 'react'
import users from "./data/user";
import { newUser } from "./data/user";
import "./App.css";

export default function App() {

    const [allUser, setAllUser] = useState([...users])

    const addUser = () => {
        setAllUser([...allUser, ...newUser]);
    };

    const deleteUser = (i) => {
        const temp = [...allUser]
        temp.splice(i, 1)
        setAllUser(temp)
    }

    return (
        <div className='app'>
            
            <div className='top-bar'>
                <h1>User Showcase</h1>

                <button className='add-btn' onClick={addUser}>
                    Add User
                </button>
            </div>

            <div className='card-container'>
                {allUser.map((user, i) => {
                    return (
                        <div key={i} className="user-card">

                            <img
                                src={user.profileImg}
                                className="user-img"
                                alt={user.name}
                            />

                            <div className="card-content">

                                <h3>{user.name}</h3>

                                <p>{user.email}</p>

                                <span>{user.role}</span> 
                                <button
                                    onClick={() => deleteUser(i)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}