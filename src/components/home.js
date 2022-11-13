
import React, { useState } from 'react';
//import apicall from './apicall';
//https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=1M4wJOpIzU95fnG4f5VuizAy2IGA5AnV
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
  const columns = [
    {
      title: 'Author',
      dataIndex: 'book_author',
      key: 'book_author',
    }, {
      title: 'Title',
      dataIndex: 'book_title',
      key: 'book_title',
    }, {
      title: 'By Line',
      dataIndex: 'byline',
      key: 'byline',
    }, {
      title: 'ISBN',
      dataIndex: 'isbn13',
      key: 'isbn13',
    }, {
      title: 'Publication Date',
      dataIndex: 'publication_dt',
      key: 'publication_dt',
    }, {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    }, {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    }];

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
    console.log(response.data);
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
      {search!=''&&
       <button type="submit" onClick={(e) => { apiSubmit() }} className="bth bth-success">Submit</button>

      }
       {search==''&&
       
       <Dropdownss data={bestSeller} />
       }
        
      </div>
     
      {
        pageMode=='search' &&
        <div>

          <Table loading={loading} dataSource={searchresults} columns={columns} />;
        
        </div>
      }</div>
  )
}

export default Home;
