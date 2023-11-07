import {MouseEvent} from "react";

function ListGroup() {
   const items= [
       'New York',
       "Tokyo",
       'London',
       'Paris'
   ];

   //Event Handler
   const handleClick = (event: MouseEvent) => console.log(event);

   const getMessage = () =>{
       return items.length === 0 ? <p>No item found</p> : null;
   }

   if(items.length === 0)
       return <p>No item found</p>

   return(
       <>
           <h1>List</h1>
           {getMessage()}
           <ul className="list-group">
               {items.map((item) => (
                   <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
               ))}
           </ul>
       </>
   )
}

export default ListGroup;