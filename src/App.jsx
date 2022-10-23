import React, { useState, useEffect } from "react";
import "./App.css";
import {MenuItem,FormControl,Select,Card,CardContent} from "@material-ui/core";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./sort";
import numeral from "numeral";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar"
import Featured from "./components/featured/Featured";
import Chart from "./components/chart/Chart";
import Domain from "./components/Domain/Domain";


const App = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all").then((response) => response.json()).then((data) => {setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => { 
      
        await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json()) .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  console.log(casesType);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = countryCode === "worldwide" 
      ? "https://disease.sh/v3/covid-19/all" 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url).then((response) => response.json()).then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };


 

  return (
    
  <div className="App">
    <Sidebar/>
    <div className="app">
      
        <div className="app__left">
          <Navbar/>
            
            <div className="app__header">
              <h1>COVID-19 Tracker</h1>
          
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
            <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
              
          
          
          
          
          <div style={{paddingLeft:150}}><Featured/> <Domain/></div>

        
              
          
          <Chart/>
          
          <List/>
          
          
        
        <Router>
         
              <Route path="/home" element={<Home/>}  />
             
              
         
        </Router>
        
        
          
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Active Cases" 
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.active)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered" 
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        
      

            
        
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="right__display">
        <CardContent>
          <div className="app__information">
            <h3>Active Cases by Country</h3>
            <h5>Highest to lowest</h5>
            <Table countries={tableData} />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
   


    </div>
 
  );
};

export default App;
