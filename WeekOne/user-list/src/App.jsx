import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Table from './components/Table';

const App = () => {
  const[inputValue,setInputValue] = useState('');
  const [userList, setUserList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleAdd = () =>{
    {/* Maintaining an updated list to add new values*/}
    const updatedList = [...userList,inputValue]
    setUserList(updatedList);
  }

  const handleClear = () =>{
    setUserList([]);
  }

  return (
    <>
      <h1>Hello World.</h1>
      {/* Bind the user input to state 'inputValue'*/}
      <input className='usr-input' type='text' placeholder='Enter User Name' value={inputValue} onChange={handleInputChange}></input>
      <Button className='btn-add'
       label={"Add"} 
       style={{'backgroundColor':'green', 'margin': '1vw','padding': '0vw 1vw', 'borderRadius': '1vw', 'height': '2vw'}}
       clickHandler={handleAdd} />
      <Button className='btn-clear'
       label={"Clear"} 
       style={{'backgroundColor':'grey','padding': '0vw 1vw', 'borderRadius': '1vw', 'height': '2vw'}}
       clickHandler={handleClear} />
      <Table list={userList}/>
    </>
  )
}

export default App