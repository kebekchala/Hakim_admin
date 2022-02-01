import React, {useEffect} from 'react';
import CardTable from './CardTable'
import { Header } from './Header';
import "./Header.css"

const  UserAdmin = ()=> {
  useEffect(() => {
    fetch("http://numbersapi.com/43/trivia")
    .then(response => response.text)
    .then(data => console.log(data))
},[])

    return (
        <Header />
        
      )
    
}

export default UserAdmin