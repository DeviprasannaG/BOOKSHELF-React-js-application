import React,{useState, useEffect} from  'react';
import axios from 'axios';
function Dropdownss({ data, search }){
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

    const [selected, setSelected] = useState("");
    const [response,setResponse]=useState("");
    const getBestSellerBooks=async (event)=>{
      setSelected(event)
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${event}.json?api-key=${process.env.REACT_APP_API_KEY}`);
        
        if(search.book_author==response.data.results.books[author]){
          setResponse(response.data.results.books)
        }
        console.log(response)
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
        {
        pageMode=='search' &&
        <div>

          <Table loading={loading} dataSource={response} columns={columns} />;
        
        </div>
      }
      </React.Fragment>
    )
  }
    export default Dropdownss;
