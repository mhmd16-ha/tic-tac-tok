"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Cell from "./Components/Cell";

export default function Home() {
  let win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  let[cells,setCells]=useState(["","","","","","","","",""])
  let [go,setGo]=useState("circle")
  let[winMessage,setWinMessage]=useState("")
  
  function winTest(){
    win.map((n)=>{
      const winX=n.every((c)=>cells[c]==="cross")
      const winy=n.every((c)=>cells[c]==="circle")
      if(winX){
        setWinMessage("cross Win !")
      }else if(winy){
        setWinMessage("circle win !")
      }
    }) 
  }
  useEffect(()=>{
    winTest()
  },[cells,winMessage])
  useEffect(()=>{
    if(cells.every((cell)=> cell!=="")&&!winMessage){
      setWinMessage("Draw !")
    }
  },[cells,winMessage])
  return (
    <main className={styles.main}>
    <div className={styles.gameBord}>
      {
        cells.map((cell,i)=>{
          return <Cell winMessage={winMessage} cell={cell} cells={cells} setCells={setCells} id={i} go={go} setGo={setGo} key={i}/>      
        })
      }
    </div>
    <h2 className={styles.mesaage}>{winMessage ? winMessage:  <span className={styles[go]}> it is turn of {go==="cross"?"X":"O"}</span>}</h2>
    <a href="/">try agin !</a>
    </main>
  );
}
