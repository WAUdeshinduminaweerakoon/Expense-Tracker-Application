import React from 'react';
import {useForm} from 'react-hook-form';
import './form.css';

const Form = () => {

  const{register, handleSubmit,resetField} = useForm();

  const onSubmit=(data)=>{
    console.log(data)
  }


  return (
    <div className='form-main'>
      <h1 className='form-heard'>Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <div className='input-gruop'>
             <input type="text" placeholder="Sallary,House Read, SIP" className='form-input'/>
          </div>
          <select className='from-input' {...register('name')}>
            <option value='Investment' defaultValue>Investment</option>
            <option value='Expense' defaultValue>Expense</option>
            <option value='Savings' defaultValue>Savings</option>
          </select>
          <div className='input-gruop'>
             <input type="text" {...register('amount')} placeholder="Amount" className='form-input'/>
          </div>
          <div className="submit-btn">
          <button className="button-submit">Make Transaction</button>

          </div>

        </div>

      </form>



    </div>
  )
}

export default Form