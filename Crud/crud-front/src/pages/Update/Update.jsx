import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

export default function Update() {
    let navigate = useNavigate();
    const [ id, setID ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ checkBox, setCheckBox ] = useState(false);
    console.log(id)
    console.log(firstName)

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setCheckBox(localStorage.getItem('Checkbox Value'))
    }, [])

    const updateAPIData = () => {
        axios.put(`https://657327cd192318b7db41a64f.mockapi.io/api/fakeData/${id}`, {
            firstName,
            lastName,
            checkBox
        }).then(() => {
            navigate('/read')
        })
    }

    return (
        <div className='home-container main'>
            <h1 className='main-header'>React Crud Operations</h1>
            <h2>Update</h2>

            <ul>
                <li><Link to='/'>home</Link></li>
            </ul>

            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' value={checkBox} onChange={(e) => setCheckBox(!checkBox)}/>
                </Form.Field>
                
                    <Button type='submit' value={id} onClick={updateAPIData}>Update</Button>

                
            </Form>
        </div>
    )
}

