import React from 'react'
import { useParams } from 'react-router-dom'
import idioms from '../../Data/Idioms';
const IdiomSingle = () => {
    const allIdioms = idioms;
const {idiomId } = useParams();
console.log(idiomId);
const data = allIdioms.find((main)=> main.id === idiomId);
console.log(data);

const {id,English, Month, Date} = data || {};

    return (
    <>
<h1> {id}</h1>
<div>{English}</div>
<img src="https://www.awalenglish.com/wp-content/uploads/2023/06/Sentence-Of-The-Day.png"
          alt="alok"
          height={400}/>

    </>
  )
}

export default IdiomSingle