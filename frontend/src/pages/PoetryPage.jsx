import React, { useState } from 'react';
import { useEffect } from 'react';
import Poetry from '../components/Poetry';
import { Button, Input } from 'semantic-ui-react';

const PoetryPage = ({myPoetry, setMyPoetry}) => {
  const [poetryData, setPoetryData] = useState([]);
  const [poetry, setPoetry] = useState({
      title: "",
      author: "",
      lines: [],
  })
  const [searchKeyword, setSearchKeyword] = useState('spring');

  const getPoetryData = async (title) => {
    try {
      const response = await fetch(`https://poetrydb.org/title/${title}`);
      const data = await response.json();
      if(data){
        setPoetryData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(poetry);
  const getPoetry = () => {
    poetryData.map((data, i) => 
      i < 10 ?
      setPoetry({
        title: data.title,
        author: data.author,
        lines: data.lines,
      }) 
      : null   
    )
  }

  // getPoetry();
  // console.log(poetry);

  useEffect(() => {
    if(searchKeyword){
      getPoetryData(searchKeyword);
    } 
  }, [searchKeyword])

  return (
    <div className='page'>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "50px"}}>
          <h1>Search poetry by key words of title...</h1>
          <Input icon='search' onChange={(e) => e.target.value ? setSearchKeyword(e.target.value) : undefined  } placeholder='Search...' /> 
        </div> 
      <Poetry data={poetryData} myPoetry={myPoetry} setMyPoetry={setMyPoetry} />
    </div>
  )
}

export default PoetryPage