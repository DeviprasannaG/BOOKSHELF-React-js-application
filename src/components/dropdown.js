import React,{useState, useEffect} from  'react';
import axios from 'axios';
function Dropdownss({ data }){

    const [selected, setSelected] = useState("");

   
   
    const getBestSellerBooks=async (event)=>{
      setSelected(event)
      console.log(event)
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${event}.json?api-key=${process.env.REACT_APP_API_KEY}`);
        console.log(response.data.results)

    }
    
    return (
      <React.Fragment>
        <select value={selected} 
        onChange={(event) => getBestSellerBooks(event.target.value)}>
          {data.map((item) =>
           
              <option value={item.list_name_encoded} key={item.list_name_encoded}>
                {item.list_name}
              </option>
    
          )}
        </select>
      
      </React.Fragment>
    )
  }
  
 
  


    export default Dropdownss;