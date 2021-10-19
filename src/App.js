
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import FeaturedServices from './Components/FeaturedServices/FeaturedServices';
import Footer from './Utilites/CustomHooks/Footer/Footer';
import Services from './Components/Services/Services';
import Membership from './Components/Membership/Membership';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import PrivetRoute from './Utilites/PrivetRoute/PrivetRoute';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
              <Banner></Banner>
              <FeaturedServices></FeaturedServices>
          </Route>
          <Route path="/home">
              <Banner></Banner>
              <FeaturedServices></FeaturedServices>
          </Route>
          <PrivetRoute path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
          </PrivetRoute>
          <Route path="/services">
              <Services></Services>
          </Route>
          <Route path="/membership">
              <Membership></Membership>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
          
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
