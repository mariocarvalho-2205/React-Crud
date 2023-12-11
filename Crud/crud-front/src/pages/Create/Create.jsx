import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import "../../../src/App.css"
import "../Create/create.css"
// https://www.freecodecamp.org/portuguese/news/como-realizar-operacoes-de-crud-usando-react-hooks-do-react-e-axios/
// https://victorhuguw-64.medium.com/construindo-uma-rest-api-utilizando-nodejs-express-e-mysql-parte-1-ef25643ab41b
// https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-mysql/
// https://community.revelo.com.br/realizando-un-crud-no-mysql-com-o-node-js/
// https://medium.com/@almeida.adriano/integrando-o-mysql-ao-nodejs-84dd5a9c8396
// https://adi22maurya.medium.com/mysql-createconnection-vs-mysql-createpool-in-node-js-42a5274626e7
// https://www.freecodecamp.org/portuguese/news/um-guia-completo-de-react-router-para-iniciantes-incluindo-router-hooks/
// https://www.treinaweb.com.br/blog/gerenciamento-de-rotas-no-react-com-react-router
// https://www.w3schools.com/react/react_router.asp



export default function Create() {
  let navigate = useNavigate()
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ checkBox, setCheckBox ] = useState(false);
  
  const Data = () => {
    axios.post('https://657327cd192318b7db41a64f.mockapi.io/api/fakeData', {
      firstName,
      lastName,
      checkBox
    }).then(() => {
      navigate('/read')
    })
    console.log(firstName)
    console.log(lastName)
    console.log(checkBox)
  }


  return (
    <div className='home-container main'>
       <h1 className='main-header'>React Crud Operations</h1>
       <h2>Create</h2>

      <ul>
        <li><Link to='/'>home</Link></li>
      </ul>
      <div className="create-form">
      <Form >
                <Form.Field>
                    <label className='label'>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='label'>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckBox(true)}/>
                </Form.Field>
                <Link to="/">
                  <Button  type='submit' onClick={Data}>Submit</Button>
                </Link>
            </Form>

      </div>

    </div>


  )
}

