import  { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Form = () => {
    
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        department:''
    })
     const [users,setUsers] = useState([]);
    const fetchUsers=async()=>{
        const res = await axios.get('http://localhost:3000/getform')
        setUsers(res.data)
        console.log(res)
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((prev=>({
            ...prev,
            [name]:value
        })))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:3000/postform',formData)

        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/> 
            <br />
            <label htmlFor="">Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            <br />
            <label htmlFor="">Password:</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange}/>
            <br />
             <label htmlFor="">Department</label>
            <input type="text" name="department" value={formData.department} onChange={handleChange}/>
            <br />
            <button type="submit">Submit</button>
        </form>
        <h1>User details</h1>
        <u1>
            {users.map((user)=> (
                 <li key={user._id}>{user.name} | {user.email} |{user.department}</li>

            ))}
        </u1>
    </div>
  )
}

export default Form