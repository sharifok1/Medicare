import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/LoginSite';
import AboutUs from './Pages/AuoutUs/AboutUs';
import DetailsService from './Pages/DetailsService/DetailsService';
import Header from './Pages/Header/Header';

import LoadData from './Pages/LoadData/LoadData';
import OurDoctors from './Pages/OurDoctors/OurDoctors';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
           <Route exact path='/'>
              <LoadData></LoadData>
           </Route>
           <Route path='/LoadData'>
              <LoadData></LoadData>
           </Route>

           <Route path='/Login'>
              <Login/>
           </Route>
           <Route path="/OurDoctors">
              <OurDoctors/>
           </Route>
           <Route path='/AboutUs'>
              <AboutUs></AboutUs>
           </Route>
           <Route path='/DetailsService'>
              <DetailsService></DetailsService>
           </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
