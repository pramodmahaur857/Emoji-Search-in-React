import React from "react";

import { useState } from 'react'
import './App.css'
import Emoji from "./Emoji.js"

export default function App() {
  const [emojidata,setemojidata] = useState(Emoji)
  
  const findEmoji = (emojiName) =>{
    const filteremoji = Emoji.filter((item)=>{
      if(item.name.toString().toLowerCase().includes(emojiName.toLowerCase())){
        return (emojiName ==='' || item.name.toString().toLowerCase().includes(emojiName.toLowerCase()))}
      else{
        return false
        }
    }) 
    console.log(emojidata)
    setemojidata(filteremoji)
  }
  return (
    <main>
      <div className="maincontainer">
        <div className="hr"></div>
        <div className="emoji"> 🐱 Emoji search 🐱</div>
      <div>
        <input type="text" placeholder="Search.."  onChange={(e)=>findEmoji(e.target.value)}></input>
      </div>
      <div>
        {emojidata && emojidata.map((item)=>{
          return <div className="mapdiv" key={item.id}>
              <div>{item.emoji} {item.name}</div>
          </div>
        })}
        {emojidata.length===0 && (<div>Emoji not found</div>)}
      </div>
      </div>
    </main>
  )
}


