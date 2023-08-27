import React from 'react'
import './labels.css'

const obj =[
  {
    type:"Saving",
    color:'#f9c74f',
    percent:45

  },
  {
    type:"Investment",
    color:'#f9c74f',
    percent:20

  },
  {
    type:"Expense",
    color:'rgb(54, 162, 235)',
    percent:10

  }
]

const Labeis = () => {
  return (
    <>
    {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  )
}

export default Labeis 

function LabelComponent({data}){
  if(!data) return<></>
  return(
    <div className='label'>
      <div className="labal-div">
        <div className='box'style={{background:data.color??'#f9c74f'}}></div>
          <div className='text-div'><h3>
            {data.type??''}
          </h3></div>
        <h3 className='font-bold'>{data.percent??0}%</h3>

      </div>

    </div>
  )
}