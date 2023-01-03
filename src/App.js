import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Grid from './Components/Grid';
import SelectComponent from './Components/SelectComponent';
import TableComponent from './Components/TableComponent';

function App() {
  var [data,setData]=useState([]);
  var [selectData,setSelectData]=useState('')
  var [error,setError]=useState('error occured');
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      let keyData = res.data.map((item)=>{
        return {...item,key:item.id}
      })
      data = keyData.slice(0,5);
      setData(data)
    })
    .catch(err=>{
        setError(err.message);
    })
},[])

const handleChange=(e)=>{
  axios.get(`https://jsonplaceholder.typicode.com/users/${e}`)
  .then(res=>{
    setSelectData(res.data)
  })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key:'id'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key:'id'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key:'id',
    render:(address)=> <p>{address.city}</p>
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a href='d'>Delete</a>,
  },
];
  return (
    <div className='App'>
      <Grid data={data} />
      <SelectComponent  handleChange={handleChange} selectData={selectData}/>
      <TableComponent data={data} columns={columns}/>
    </div>
  );
}

export default App;
