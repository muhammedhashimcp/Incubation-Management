import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import AdminFeed from '../components/AdminFeed';
import {reset} from '../features/auth/authSlice'

function AdminDashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user,isLoading, isError, message } = useSelector((state) => state.auth);
  

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }
    if(user.role==='user'){
      navigate('/login')
    }
    
     return () => {
			dispatch(reset())
		}
  }, [user, navigate, isError, message, dispatch]);

 
  
  return (
		<>
			<AdminFeed />
		
		</>
  )
}

export default AdminDashboard