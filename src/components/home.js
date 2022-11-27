
import React, { useState } from 'react';

import Dropdownss from './dropdown';
import axios from 'axios';
import "antd/dist/antd.css";
import { Table } from 'antd';
function Home() {
  const [search, setSearch] = useState('');
  const [searchresults, setSearchresults] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageMode, setPageMode] = useState('search'); //initial,search,list bestseller
  
    React.useEffect( () => {
      
   
      const getBestSeller=async ()=>
      {
       
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_API_KEY}`);
        setBestSeller(response.data.results)
        
      }
      getBestSeller();
    },[]);
  async function apiSubmit() {
    setLoading(true)
    //convert the search criteria to querry string
    var searchCreiteria = search.replace(/\s/g, '+')
    console.log(searchCreiteria)

    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${searchCreiteria}&api-key=${process.env.REACT_APP_API_KEY}`);
    for(var i=0;i<response.data.results.length;i++)response.data.results[i].key=i;
    setSearchresults(response.data.results);
    setLoading(false)
  }
  const data = [];
  return (
    <div className="App">
      <div className='d-flex'>
       <label htmlFor="author">Author : {"   "}</label>
      <input style={{marginLeft:"10px",marginRight:"10px"}}id="author" type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      <Dropdownss data={bestSeller} search={searchresults}/>
      {search!=''&&
       <button type="submit" onClick={(e) => {apiSubmit()}} className="bth bth-success">Submit</button>
      }
        
      </div>
      </div>
  )
}

export default Home;

