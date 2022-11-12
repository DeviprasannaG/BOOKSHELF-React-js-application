
import React,{useState} from 'react';
//import apicall from './apicall';
//https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=1M4wJOpIzU95fnG4f5VuizAy2IGA5AnV
import Dropdownss from './dropdown';
import axios from 'axios';
function Home(){
  const [search,setSearch] = useState('');
  const [searchresults, setSearchresults]= useState([]);
  
  async function apiSubmit(){
  const response =await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${search}&api-key=${process.env.REACT_APP_API_KEY}`);
  console.log(response.data);
  setSearchresults(response.data);
  }
 
   const data = [
    {
      categories: ["women"],
      variants: ["white", "black", "green"],
      sizes: [38, 39, 40],
      _id: "5f8edf08880a821cb8757d8a",
      name: "Nike Air",
      description: "Tennis court levitating sneaker",
      img: "https://source.unsplash.com/user/erondu/PGTO_A0eLt4",
      price: 100
    },
    {
      categories: ["man"],
      variants: ["black", "green", "yellow"],
      sizes: [37, 39, 40, 42],
      _id: "5f8edf08880a821cb8757d9b",
      name: "Another Nike Air",
      description: "Another description",
      img: "https://source.unsplash.com/user/erondu/1600x900",
      price: 120
    }
  ];
  return (
  <div className="App">
             <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
               <button type="submit"  onClick={(e)=>{apiSubmit()}} className="bth bth-success">Submit</button>
  {
    searchresults &&
    <div>
     
      <Dropdownss data={searchresults} />
  </div>
}</div>
  )}

export default Home;
