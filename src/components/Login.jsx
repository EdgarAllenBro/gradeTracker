import axios from "axios"
import { useState } from "react"


export default function Login (){
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')

const submitLogin = (e)=>{
    e.preventDefault()
    axios.post('/userLogin', {
        username:username,
        password:password
    }).then((res)=>{
        if(res.data.teacherId){
            alert('logged in')
        }else{
            alert(res.data)
        }
    })
}

    return (
        <form className="loginForm" onSubmit={submitLogin}>
            <input name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            <input name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <button>Submit</button>
        </form>
    )
}