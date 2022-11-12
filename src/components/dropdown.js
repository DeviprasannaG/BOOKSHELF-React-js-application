import React,{useState, useEffect} from  'react';
function Dropdownss({ data }){
    const [selected, setSelected] = useState("-");
    const [selectedCategory, setSelectedCategory] = useState(data);
   
    useEffect(() => {
      const category = data.filter((item) => item.key[0] === selected);
  
      setSelectedCategory(category);
    }, [data, selected]);
  
    const handleSelcet = (e) => {
      setSelected(e.target.value);
    };
    
    return (
      <React.Fragment>
        <select onChange={handleSelcet}>
          {data.map((item) =>
            item.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          )}
        </select>
        {selectedCategory.map((category) => {
          return (
            <div key={category.id}>
              <p>Name: {category.author}</p>
              <p>Description: {category.description}</p>
              <p>Price: {category.price}</p>
              variants:
              <ul>
                {category.variants.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <img src={category.img} alt="" />
            </div>
          );
        })}
      </React.Fragment>
    )
  }
  
 
  


    export default Dropdownss;