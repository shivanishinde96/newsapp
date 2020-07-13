import React,{useState} from 'react';

import './App.css';
import { useEffect } from 'react';

const App=()=>{
  const [news,setnews]=useState([])
  const [searchQuery,setsearchQuery]=useState('bitcoin')
  const [url,seturl]=useState('')
  const [loading,setloading]=useState(false)

  const fetchNews=()=>{
    setloading(true)
    fetch(url).then(res=>res.json())
    .then(data=>setnews(data.articles),setloading(false))
    .catch(err=>{
      console.log(err)
    })
  }
    useEffect(()=>{
      fetchNews()
    },[url])

    const handleSearchQuery=(e)=>{
      setsearchQuery(e.target.value)
    }

    const handleSearch=(e)=>{
      e.preventDefault()
      seturl(`http://newsapi.org/v2/everything?q=${searchQuery}&apiKey=dd8d0a13347641ca82f10f2bcb834e17`)
    }

    const mapnews=()=>news.map((n,i)=>(<p key={i}>{n.title}</p> ))
  //const newsapp=()=>news.map((n,i)=><p key={i} name={n.title} author={n.author}/>)
    return(
    <>
      <h1>News App</h1>
      {loading?<h2>Loading...</h2>:''}
      <form onSubmit={handleSearch}>
      <input type="text" onChange={handleSearchQuery} value={searchQuery}/>
     <button>Search</button>
      {mapnews()}
    </form>
    
    </>
  )

}


export default App
