import React from 'react'

const CongratsCard = () => {
  return (
    <div className="bg-congratsCardBg flex flex-col items-center justify-center h-screen ">
      <h1 className='text-4xl mb-3 font-bold text-[#0f172a]'>Congratulations</h1>
      <div className='flex flex-col items-center justify-center text-center bg-[#cffafe] p-5 rounded-xl'>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="profile img" />
        <h2 className='text-[#1e293b] text-2xl my-2 font-semibold'>Kiran V</h2>
        <p className='text-[#1e293b] my-2 font-semibold'>Sri kalahasteswara Institute of Science and Technology, <br /> Sri Kalahasti.</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="watch" />
      </div>
    </div>
  )
}

export default CongratsCard
