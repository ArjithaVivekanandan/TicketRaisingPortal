import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export default function Report(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://60446311c0194f00170bba71.mockapi.io/query")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])


      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
    
    return <>
  <h2 class="p-2">Dashboard</h2>
        
  <table class="table table-hover">
  <thead>
    <tr>
          <th scope="col">Ticket ID</th>
          <th scope="col">Student Name</th>
          <th scope="col">Email</th>
          <th scope="col">Query Type</th>
          <th scope="col">Description</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
         
          {
            
             items.map((item)=>{
                  return <tr >
                  <th scope="col">{item.id}</th>
                  <td >{item.studName}</td>
                 <td >{item.studEmail}</td>
                 <td >{item.querytype}</td>
                <td >{item.desc}</td>
                <td ><Link to={`/edit/${item.id}`}><button class="btn-sm btn-primary">Edit</button></Link>
                &nbsp;
                <Link to={`/delete/${item.id}`}><button class="btn-sm btn-danger">Delete</button></Link>
                </td>

                </tr>
             })
              }
      </tbody>
    </table>
 
  </>
}
}