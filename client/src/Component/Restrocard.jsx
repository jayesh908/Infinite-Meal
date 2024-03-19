import React from 'react'
import { CDN_URL } from '../Utilities/constant';
import { Link } from 'react-router-dom';
const Restrocard = ({ resList }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    id
  } = resList?.info;
  return (
    <>

      <Link to={`/restaurant/${id}`} key={id}>
        <div className=' h-[550px] bg-tra text-black rounded-lg p-4 w-[300px] m-4 hover:shadow-xl ' key={id}>
          <img className='rounded-lg ' alt='...' src={
            CDN_URL +
            cloudinaryImageId
          }></img>
          <div>
            <h3 className='font-bold py-2 text-2xl'>{name}</h3>
            {<h4 className='text-xl'>{cuisines.join(', ')}</h4>}
            <h4 className='text-xl text-red-700'>{avgRating}Star</h4>
            <h4 className='text-xl text-lime-500'>{costForTwo}</h4>
          </div>
        </div>
      </Link>


    </>
  )
}

export const Promotedcard = (Restrocard) => {
  return ({ resList }) => {
    return (
      <div className='relative'>
        <label className=' absolute p-2 bg-black text-white left-8 top-8 rounded-lg'>Available</label>
        <Restrocard resList={resList} />
      </div>
    )
  }
}
export default Restrocard
