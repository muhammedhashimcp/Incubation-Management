import React from 'react'
import {useDispatch} from 'react-redux'
import {createIncubation} from '../features/incubation/incubationSlice'
function IncubationDetails({forms}) {
  return (
    <div className='goal'>
        <div>
        {new Date(forms.createdAt).toLocaleString('en-US')}
        <h3>{forms.name}</h3>
        <h3>{forms.email}</h3>
        <h3>{forms.phone}</h3>
        <h3>{forms.address}</h3>
        </div>
    </div>
  )
}

export default IncubationDetails