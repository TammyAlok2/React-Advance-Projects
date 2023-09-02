import React, { useState } from 'react'
import idioms from '../../Data/Idioms.js'
import { Link } from 'react-router-dom';
const DailyIdioms = () => {
    const [item,setItem] = useState(idioms);
  return (
   <>
   <div className='container'> 
   {
item.map((item)=>{
    return (
<>

<Link to= {`/idiom/${item.id}`}> <h1>{item.id}</h1> </Link> 
<p><strong>English:{item.English}</strong></p>
<img src='sentence.png' alt='alok' height={200}/>
<p>{item.Date}{item.Month} </p>
<Link to=  {`/idiom/${item.id}`}><button>Read More </button> </Link>
</>
    )
})
   }
   
   </div>
   
   
   </>
  )
}

export default DailyIdioms