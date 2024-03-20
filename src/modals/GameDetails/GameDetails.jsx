// import React from "react"
// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom"
// import "./GameDetails.css"
// import { getGame } from "../../services/games.js"

// export default function GameDetails() {
//   const [game, setGame] = useState(false);

//   let { id } = useParams();
//   let navigate = useNavigate();

//   const fetch = async () => {
//     const oneGame = await getGame(id);
//     setGame(oneGame);
//   }


//   const toggleGameDetails = () => {
//     setGame(!game);
//   };

//   return (
//     <div>
//       <h1> welcome to {game.name}</h1>
//       <img src={game.img} alt={game.id} />
//     </div>

//   );
// }