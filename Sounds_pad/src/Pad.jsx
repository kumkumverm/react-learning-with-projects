export default function Pad(props){
    return(
       <button
   onClick={()=>props.handleClick(props.id)}

       style={{backgroundColor:props.color}}
       className={props.on?"on":null}
  
       >
       </button>
    )
}