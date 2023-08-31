import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='form-main'>
      <h1 className='form-heard'>Transaction</h1>
      <form id="form">
        <div className='grid gap-4'>
          <div className='input-gruop'>
             <input type="text" placeholder="Sallary,House Read, SIP" className='form-input'/>
          </div>

        </div>

      </form>



    </div>
  )
}

export default Form