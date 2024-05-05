import logo from './logo.svg';
import './App.css';
import JobFilter from './components/JobFilter'
import Jobview from './components/JobView'
import { useState } from 'react';
function App() {


  const [filters, setFilters] = useState({ location: '' ,jobRole:'',minExp:'',minJdSalary:'',workType:'',companyName:''});

  return (
   <div>
    <JobFilter filters={filters} setFilters={setFilters}/>
    <Jobview filters={filters}/>

   </div>
  );
}

export default App;
