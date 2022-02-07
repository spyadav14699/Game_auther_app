import { useEffect, useState } from "react"

export const Output = () => {

    const [game, setGame] = useState([])

    useEffect(() => {
        
        fetch("http://localhost:3001/games").then((d) => d.json()).then(res => {
            setGame(res)
        })
    }, [])

return (

    <div>
       
        <table>
            <thead>
                <tr>
                    <th>Game Name</th>
                    <th>Game Author</th>
                    <th>Game Price</th>
                    <th>Game Tags</th>
                    <th>For Kids</th>
                    <th>Game Desc</th>
                    <th>Game Rating</th>
                   
                    </tr>
                    </thead>

                    {game.map((e) => {

    return (
    <tbody>
   
    <tr>
    <td>{e.gamename}</td>
        <td>{e.gameauthor}</td>
        <td>{e.gameprice}</td>
        <td>{e.gametags}</td>
        <td>{e.forkids}</td>
        <td>{e.gamedesc}</td>
        <td>{e.gamerating}</td>
    

    </tr>

                 </tbody>
  )
})}  
                         </table>

    </div>
)

}