import React from 'react'
import './list.css';
import '../index.css';

const obj =[
    {
      name:"Saving",
      color:'#f9c74f',
     
  
    },
    {
      name:"Investment",
      color:'#f9c74f',
    },
    {
      name:"Expense",
      color:'rgb(54, 162, 235)',
     
  
    }
  ]

export default function List() {
  return (
    <div className='ListDiv'>
        <h1 className='ListDiv-h1'>History</h1>
        {obj.map((v,i)=> <Transaction key={i} category={v}></Transaction> )}
        
        </div>
  )
}



function Transaction({category}){
    if(!category)return null;
    return(
        <div className="transaction-div1" style={{ borderRadius: `8px solid ${category.color ?? "#f9c74f"}` }}>
            <button>icon</button>
            <span className='transaction-div1-saving'> {category.name??''}</span>

        </div>
    )
}