import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function SearchResults(props) {
  const [searchResults, setSearchResults] = useState([]);
  const searchUrl = "https://restcountries.eu/rest/v2/name/";


  async function fetchSearchResults() {
    const resp = await fetch(searchUrl + props.match.params.query);
    const data = await resp.json();
    console.log(data);
    setSearchResults(data);
  }

  useEffect(() => {
    props.match.params.query && fetchSearchResults();
  }, [props.match.params.query])

  return (
    <div className="SearchResults">
    SearchResults:<br/>
    {searchResults.map((n,i)=>( 
        <>
        {n.name}<br/>
        Population: {n.population} <br/>
        Capital city: {n.capital}<br/>
        </>
        ) )}
        <Link to="/all">Back to all states</Link>
    </div>
  );
}

export default SearchResults;