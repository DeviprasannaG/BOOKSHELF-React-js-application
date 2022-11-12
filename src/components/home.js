import React,{useState} from 'react';
import axios from 'axios';
//import Card from './Card'
import dropdownfilter from './dropdownfilter';
function Home(){
  const [search,setSearch] = useState('');
  const [searchresults, setSearchresults]= useState([]);
  
  async function apiSubmit(){
  const response =await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${search}&api-key=${process.env.REACT_APP_API_KEY}`);
  console.log(response.data);
  setSearchresults(response.data);
  }
  
  return (
  <div className="App">
             <input type="text" value={search} onChange={(e) =>{setSearch(e.target.value)}}/>
               <button type="submit"  onClick={(e)=>{apiSubmit()}} className="bth bth-success">Submit</button>   
  {
    searchresults &&
    <div>
      <h1>{searchresults.status}</h1>
  </div>
}</div>
  )}

export default Home;
