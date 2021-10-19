import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute';
import Registration from './Authentication/Registration/Registration';
import AuthProvider from './ContexAPI/AuthProvider';
import AboutUs from './Pages/AuoutUs/AboutUs';
import DetailsService from './Pages/DetailsService/DetailsService';
import Header from './Pages/Header/Header';

import LoadData from './Pages/LoadData/LoadData';
import Notfound from './Pages/NotFound/Notfound';
import OurDoctors from './Pages/OurDoctors/OurDoctors';

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
           <Route path='/Registration'>
              <Registration/>
           </Route>
           <Route path="/OurDoctors">
              <OurDoctors/>
           </Route>
           <Route path='/AboutUs'>
              <AboutUs></AboutUs>
           </Route>
           <PrivateRoute path='/DetailsService/:serviceId'>
              <DetailsService></DetailsService>
           </PrivateRoute>
           <Route>
             <Notfound></Notfound>
           </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
