import React, { useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios'


const Read = () => {
    const [ APIData , setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://657327cd192318b7db41a64f.mockapi.io/api/fakeData")
            .then((res) => {
                setAPIData(res.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName,  checkBox } = data;
        localStorage.setItem('ID', id)
        localStorage.setItem('First Name', firstName)
        localStorage.setItem('Last Name', lastName)
        localStorage.setItem('Checkbox Value', checkBox)
        console.log(data)
    }

    const onDelete = (id) => {
        axios.delete(`https://657327cd192318b7db41a64f.mockapi.io/api/fakeData/${id}`)
        .then(() => {
            getData()
        })
    }

    const getData = () => {
        axios.get(`https://657327cd192318b7db41a64f.mockapi.io/api/fakeData`)
        .then((getData) => {setAPIData(getData.data);
        })
    }

  return (
    <div className='home-container main'>
       <h1 className='main-header'>React Crud Operations</h1>
       <h2>Read</h2>

      <ul>
        <li><Link to='/'>home</Link></li>
      </ul>
      <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Check Box</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkBox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell><Button onClick={() => {setData(data)}}>Update</Button></Table.Cell>
                                </Link>
                                
                                    <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                                
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

    </div>
  )
}

export default Read