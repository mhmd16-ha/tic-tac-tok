import React, { Dispatch, SetStateAction } from 'react'
import styles from '../page.module.css'
type propsType={
  go:string;
  setGo:Dispatch<SetStateAction<string>>;
  id:number;
  cells:string[];
  setCells:Dispatch<SetStateAction<string[]>>;
  cell:string;
  winMessage:string
}
export default function Cell({go ,setGo,id,cells,setCells,cell,winMessage}:propsType) {
  function handleClick(){
    if(winMessage){
      return
    }
    let notToken=!cells[id]
    if(notToken){
    if(go=="circle"){
      handleChange("circle")
      setGo("cross")
    }else if(go="cross"){
      handleChange("cross")
      setGo("circle")
    }
  }
  }
  function handleChange(cellChange:string){
    let copyCells=[...cells]
    copyCells[id]=cellChange
    setCells(copyCells)

   }
  return (
    <div className={styles.cell} onClick={handleClick}>
    <h1 className={styles[cell]}>{cell?(cell==="cross"?"X":"O"):null}</h1>
    </div>
  )
}
