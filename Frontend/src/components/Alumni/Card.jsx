import React from 'react'

const Card = (props) => {
  return (
    <div className='h-[20vw] min-h-70 w-[60vw] min-w-175 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex items-center px-10 shadow-2xl transition-all hover:bg-white/15' >
      <div className='h-[14vw] w-[14vw] min-h-45 min-w-45 shrink-0'>
        <img 
          src={props.image} 
          className='h-full w-full rounded-2xl object-cover shadow-lg border border-white/10' 
          alt={props.name} 
        />
      </div>

      <div className='ml-8 text-white'>
        <h1 className='text-[2.2vw] font-bold leading-tight'>
          {props.name} <span className='text-blue-400 text-[1.4vw] ml-1'>{props.branch}</span>
        </h1>
        <h2 className='text-[1.1vw] font-semibold text-pink-300 uppercase tracking-wide mt-1'>
          {props.role}
        </h2>
        <p className='text-[0.9vw] text-gray-300 italic mb-4'>
          {props.project}
        </p>
        
        <div className='space-y-1 border-t border-white/10 pt-3'>
          {props.award1 && (
            <p className='text-[1vw] flex items-center gap-2'>
              <span className='h-1.5 w-1.5 bg-white rounded-full'></span>
              {props.award1}
            </p>
          )}
          {props.award2 && (
            <p className='text-[1.1vw] font-bold text-pink-400 flex items-center gap-2'>
              <span className='h-1.5 w-1.5 bg-pink-400 rounded-full'></span>
              {props.award2}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card