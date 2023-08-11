import React, { useEffect, useState } from 'react'

const Form = () => {
    // an object created to store the values from front end!
    //this object represents the initial state for the input values
    const data = { name: "", email: "", password: "" };
    //state to hadle those input values
    const [input, setInput] = useState(data)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        console.log("Registered")
    }, [flag])

    //Event Handler Function
    //we have defined this function so that whenever the user will input values into the text field
    // then we want to set those values into "input" object using "setInput".
    //now what we do here is we want to keep the previous state stored using "...input"=>(spread operator) and also take "name"
    //variable as a key and store the values resepectively.
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }
    //this functon is defined to handle the action after submit and in here "e.preventDefault" is used
    //to prevent the default page refresh after submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name || !input.email || !input.password) {
            alert("All fields are mandatory")
        }
        else {
            setFlag(true)

        }
    }
    return (
        <>
        <pre>{(flag)?<h3 className='ui-define'>Hello {input.name}! You've Registered Successfully.</h3>:""}</pre>
            <form className='container' onSubmit={handleSubmit} >
                <div className='header'>
                    <h3>Registration Form</h3>
                </div>
                <div>
                    {/*we used value attribute to store the values */}
                    <input type="text"
                        placeholder='Enter your name'
                        name='name'
                        value={input.name}
                        onChange={handleChange} />
                </div>
                <div>
                    <input type="text"
                        placeholder='Enter your email'
                        name='email'
                        value={input.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <input type="password"
                        placeholder='Enter your password'
                        name='password'
                        value={input.password}
                        onChange={handleChange} />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </>
    )
}

export default Form
