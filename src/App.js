import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Country from "./Components/Country";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import DropDownMenu from "./Components/DropDownMenu";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("Europe");

  const allCountriesUrl = "https://restcountries.eu/rest/v2/all";

  async function fetchAllCountries() {
    const resp = await fetch(allCountriesUrl);
    const data = await resp.json();
    console.log(data);
    setCountries(data);
  }

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Link to="/all">Go to countries</Link>}
        />
        <Route path="/search/:query" component={SearchResults} />
        <Route
          path="/all"
          component={() => (
            <>
              <SearchBar
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
              />
              <DropDownMenu setRegion={setRegion} region={region} />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {countries.map((n, i) =>
                  region == "All" || n.region == region ? (
                    <Country info={n} />
                  ) : (
                    ""
                  )
                )}
              </div>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
