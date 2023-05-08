import React, { useState } from 'react'
import fireDb from "./Firebase"
import "./AddQuote.css"

// import { Link } from 'react-router-dom'
const AddQuote = () => {
    
    const [data,setData]=useState({
        Name:"",
        Quote:""
    });

    function store(e)
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    function save()
    {
        fireDb.child("quote").push(data,(err)=>{
            if(err)
               alert("sorry")
            else
                {
                   alert("save")
                    setData({
                        Name:"",
                        Phone:""
                        
                    })
                }
        })
    }
    
  return (
    <div className='quote-container'>
             <div className='form' >

                 <form className='addquote' >
                    
                     <h3 className='head'>Add Your Quote</h3>
                     <div className="name">
                         <label htmlFor="email">Name</label>
                         <input type="text" name="Name" id="user" placeholder='Your Name'  onChange={store}/>
                     </div>

                     <div className="Quote">
                         <label htmlFor="Quote">Quote</label>
                         <input type="text" name="Quote"  placeholder='Your Quote' onChange={store}/>
                     </div>
                     <button className='btn2' type="submit" onClick={save}>Upload Quote</button>
                    

                 </form>
             </div>
         </div>   
  )
}

export default AddQuote