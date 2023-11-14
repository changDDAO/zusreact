import React from 'react'
import IdStore from "../states/ID";

function Lobby(){
    const {id} = IdStore();
return (
   <div>
       <header>Lobby</header>
       <p>name: {id}</p>
   </div>
);
}
export default Lobby;