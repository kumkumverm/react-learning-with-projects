  import Markdown from 'react-markdown'
  export default function Recommends(props){
    return(
    <section className='suggested-recipe-container'>
      <h2>Chef Claude Recipe:</h2>
  <Markdown>{props.recipe}</Markdown> 
</section>
    )
  }