import React from 'react'
import '../../styles.css';

export const Landing = () => {
  return (
    <div className='d-flex landing-page'>
        <div className='bg-info w-50'>
            Image side
        </div>
        <div className='bg-danger w-50'>
            content side
        </div>
    </div>
  )
}
