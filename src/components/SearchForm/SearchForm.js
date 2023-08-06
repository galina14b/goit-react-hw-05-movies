import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ , setSearchParams] = useSearchParams('');


  const upDateQuery = (query) => {
    if (!query) {
      return
    } else {
      setSearchQuery(query);
    }
  }

  function Submit(e) {
    e.preventDefault();
    setSearchParams({ "movieName": searchQuery });
    setSearchQuery('');
  };
  
  return (
    <div>
      <form className="input-group mb-3" onSubmit={(e) => Submit(e)}>
        <input type="text" className="form-control" value={searchQuery} onChange={(e) => upDateQuery(e.target.value)} placeholder="Movie..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
      </form>
    </div>
  )
}

export default SearchForm;