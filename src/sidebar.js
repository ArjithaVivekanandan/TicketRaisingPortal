import { Link } from "react-router-dom";

export default function Sidebar(){

    return<>
           <div class="list-group-item list-group-item-action bg-light">
           
           <div className="text-center">
            <Link to="/home">
            <button class="btn btn-dark">Home</button></Link>
            &nbsp;
              <Link to="/createTicket">  
              <button class="btn btn-dark" >Raise Ticket</button></Link>
              &nbsp;
              <Link to="/report">  
              <button class="btn btn-dark" >Dashboard</button></Link>
              </div>
             
         
          </div>
        
    </>
}