import React from 'react';
import CardTable from './CardTable'
import { Header } from './Header';
import "./Header.css"

const  UserAdmin = ()=> {

    return (
        <div style={{ width: "90%" }} className="d-flex flex-row">
        <div className="p3 header">
        <Header />
        </div>
      </div>
      )
    
}

export default UserAdmin