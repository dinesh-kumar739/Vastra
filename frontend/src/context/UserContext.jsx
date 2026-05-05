import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from './authContext'
import { Await } from 'react-router-dom'
import axios from 'axios'
// import { linkWithCredential } from 'firebase/auth'

export const userDataContext = createContext(null)
function UserContext({children}) {

    let [userData,setUserData]=useState("")
    let {serverUrl} = useContext(authDataContext)
    
    const getCurrentUser=async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getcurrentuser", { 
                withCredentials: true 
            })
            setUserData(result.data)
            console.log(result.data) 
        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    let value={
        userData,setUserData,getCurrentUser
    }

    return (
    <div>
        <userDataContext.Provider value={value}>
                {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext