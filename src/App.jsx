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
  const [category,setCategory] = useState(filterData[0].title);

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
    <div className="flex flex-col min-h-screen bg-bgDark2">

      <div>
        <Navbar/>
      </div>

      <div className='bg-bgDark2'>
          <div>
            <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          </div>

          <div className=' w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading? 
            ( <Spinner/> ) 
            : 
            ( <Cards courses={courses} category={category}/> )
          }
          </div>
      </div>
      
      
    </div>
  );
}

export default App;
