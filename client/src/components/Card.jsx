import React from 'react'

const Card = (props) => {
  console.log(props.photo);
  return (
    <div className='mr-20 bg-white text-black inline-block p-6  text-center rounded'>
      <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.user} Surname</h1>
      <h4 className='text-blue-400'>{props.profession}</h4>
      <h2>{props.city}, {props.age}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default Card