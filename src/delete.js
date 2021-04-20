import { Link } from "react-router-dom";
export default function Delete(props){

    let TicketId = props.match.params.id;
    
    fetch("https://60446311c0194f00170bba71.mockapi.io/query/"+TicketId, {
        method: "DELETE",
        body: JSON.stringify(),
        headers: {
            "Content-type": "application/json"
        }
    })

    return <> 
       <h1>Item Deleted Successfully</h1>
    <br/>
    <Link to={`/report/`}><button className="btn btn-lg btn-primary">Back to Dashboard</button></Link>
       </>
}
