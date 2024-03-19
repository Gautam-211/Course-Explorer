import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import React, { useEffect, useState } from 'react';
import { filterData,apiUrl } from "./data";
import {toast} from  'react-toastify';
import Spinner from './components/Spinner';

function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);  // This is done to show a loader while the data from api is being fetched

  const fetchData = async() => {

    setLoading(true);                   // this sets the loader to true 

    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong!");
    }

    setLoading(false);               // this is executed when the above code is implemented since it is an async await statement 
  }                                  // and then the loader is set to true

  useEffect( () => {
    fetchData(); 
  },[])

  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData}/>
      </div>

      <div>
        {
          loading? 
          ( <Spinner/> ) 
          : 
          ( <Cards courses={courses}/> )
           
         
        }
      </div>
      
    </div>
  );
}

export default App;
