import './App.css';
import PostJob from './components/PostJob';
import Navbar from './components/Navbar';
import Homepage from './components/Hompage';
import axios from 'axios';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import JobDetails from './components/JobDetails';
function App() {
  axios.defaults.baseURL='http://127.0.0.1:3333';
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/post' element={<PostJob/>}/>
          <Route exact path='/job/*' element={<JobDetails/>}/>
          <Route exact path='*' element={
          <>
            <Homepage/>
          </>
        }/>
        </Routes>
      </Router>
      </>
  );
}

export default App;
