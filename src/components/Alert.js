import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase(); //Converts whole word into lowercase
        return lower.charAt(0).toUpperCase() + lower.slice(1); //Makes first character to uppercase and the slice removes the first element and the first character of final word becomes capitalized 
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  </div>
  )
}
