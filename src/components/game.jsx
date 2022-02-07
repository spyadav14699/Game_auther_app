import {useState} from "react"
export  const Games = () => {

    
   
   const [name, setName] = useState("");
   
   const [auth, setAuth] = useState("");
   
   const [price, setPrice] = useState("");
   
   const [tags, setTags] = useState("");
   
   const [kids, setKids] = useState("");
   
   const [desc, setDesc] = useState("");
   
   const [rating, setRating] = useState("")
   
   
   
   
   
   return (
     <div>
         <input type="text" placeholder='Game Name' 
         onChange={(e) => setName(e.target.value)} 
         /> <br /><br />
         <input type="text" placeholder='Game Author'
         onChange={(e) => setAuth(e.target.value)}
         /><br /><br />
         
         <input type="text" placeholder='Game Tags'
         onChange={(e) => setTags(e.target.value)}
         /><br /><br />
         <input type="number" placeholder='Game Price '
         onChange={(e) => setPrice(e.target.value)}
         /><br /><br />
        
         <textarea name="" id="" cols="50" rows="5" placeholder='Game Description '
         onChange={(e) => setDesc(e.target.value)}
         ></textarea> <br /><br />
           
         <div>
           <h1>For Kids</h1>
         <input type="checkbox" value="Kids"
         onChange={(e) => setKids(!kids ? "true" : "false")} 
         /><br /><br />
         <label> Rating </label>  
   <select
   onChange={(e) => setRating(e.target.value)}
   >  
   <option value = "1"> *   
   </option>  
   <option value = "2"> **   
   </option>  
   <option value = "3"> ***  
   </option>  
   <option value = "4"> ****  
   </option>
   <option value = "5"> *****  
   </option>  
   </select>
           </div>  
           <br /><br />
    
         <input onClick={() => {
         
   const data = {gamename : name, gameauthor : auth, gameprice : price, gametags : tags,
     forkids: kids, gamedesc : desc, gamerating : rating }

     const finaldata = () => {
        
        if(name.length !== 0 || auth.length !== 0 || price > 0 || tags.length !== 0 || desc.length !== 0 ||
            rating > 0) {

                return data
            }
            else {
                alert("please fill the blanck")
            }



     }
   
   fetch("http://localhost:3001/games", {
     method : "POST",
     body : JSON.stringify(finaldata()),
     headers: {
       "content-type": "application/json"
     }
   })
           }} 
         
         
         type="Submit" / >
         
         
     </div>
   )
   




     }

     