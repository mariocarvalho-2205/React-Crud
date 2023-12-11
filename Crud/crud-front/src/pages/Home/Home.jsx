import React from 'react'
import { Link } from "react-router-dom";
import '../../App.css';

const Home = () => {
  return (
    <div className='home-container main'>
      <h1>React Crud Operations</h1>

      <div>
        <nav>
          <ul>
            <li><Link>Home</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/read">Read</Link></li>
            <li><Link to="/update">Update</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home