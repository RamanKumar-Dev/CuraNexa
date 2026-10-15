import React from 'react'
import {specialityData} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div id='speciality' className='flex flex-col items-center my-20 gap-4 text-gray-800'>
        <h1 className='text-3xl font-semibold'>Find by Speciality</h1>
        <p className=''>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div>
            {specialityData.map((item, index) => (
                <Link key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Speciality