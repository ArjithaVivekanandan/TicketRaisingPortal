
import './App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateTicket from './createticket';
import Report from './report';
import Home from './home';
 import Edit from './edit';
 import Delete from './delete';



function App() {

   return <>
   <Router>
  
  <Navbar/>
  <Sidebar/>
<div className="container">

  

      <div class="row">


       
        <div className="px-4">
        <Switch>
        <Route path="/createticket" component={CreateTicket} />
        <Route path="/report" component={Report} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} /> 
        <Route path="/" component={Home} />
        </Switch>
        </div>
        </div>

      </div>



       
   
      
      
  

    </Router>

 </>

}

export default App;
