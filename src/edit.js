import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Edit(props){

    let TicketId = props.match.params.id;
    let [studName, setStudName] = useState("");
    let [studEmail, setStudEmail] = useState("");
    let [querytype, setQueryType] = useState("");
    let [desc, setDesc] = useState("");
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
     var url="https://60446311c0194f00170bba71.mockapi.io/query/"+TicketId;

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              console.log(result);
              setStudName(result.studName)
             setStudEmail(result.studEmail)
             setQueryType(result.queryquerytype)
             setDesc(result.desc)
     
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      },[url])

 

 let handleSubmit = () => {
   
   
    fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            studName,
            studEmail,
            querytype,
            desc
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    alert("Updated Successfully")   
}

if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {


    return <> <div className="row">
        
    <div className="col-12 p-2"><h1>Update Ticket</h1></div>
    
    <div className="col-12 p-2">
        <label>Student Name</label>
        <input type="text" className="form-control inputstyle" value={studName} onChange={(e) => setStudName(e.target.value)}/>
    </div>
    
    <div className="col-12 p-2">
        <label>Email</label>
        <input type="text" className="form-control inputstyle" value={studEmail} onChange={(e) => setStudEmail(e.target.value)} />
    </div>


    <div className="col-12 p-2">
        <label>Query Type</label>
        <br></br>
    <select id="query" className="col-10 p-2 inputdrop" name="ticket"  onChange={(e) =>setQueryType(e.target.value)}>
    <option value="default" selected disabled hidden>Select an Option</option>
    <option value="Technical Doubt">Technical Doubt</option>
    <option value="Syllabus">Syllabus</option>
    <option value="Fees">Fees</option>
    <option value="Other">Other</option>
    </select>
    </div>

    <div className="col-12 p-2">
        <label>Description</label>
        <textarea className="form-control txtarea" value={desc} onChange={(e) => setDesc(e.target.value)}/>
    </div>
    
<br/>
    <div className="col-12">
    <br/>
    
        <input className="btn btn-primary" type="submit" onClick={handleSubmit} />&nbsp;
        
        <Link to={`/report/`}><button className="btn btn-primary">Back to Dashboard</button></Link>
    </div>

    </div></>
}}
