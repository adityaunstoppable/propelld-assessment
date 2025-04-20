import React from 'react'
import CancelButton from '../buttons/CancelButton'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../utils/constants/routes';
import { showSuccessToast } from '../../../redux/slices/toastSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userName} = useSelector(state => state.auth)

  const logout = () => {
    dispatch(logoutUser())
    dispatch(showSuccessToast("Logged out successfully!"))
    navigate(LOGIN)
  }

  return (
    <div className='flex items-center w-full px-5 py-3 z-40 shadow-lg'>
      
      <h2 className="text-lg text-gray-900">Welcome, {userName} !</h2>
      <div className='ml-auto'>
        <CancelButton customClassName="hover:bg-red-500" actionHandler={logout} label='Logout' />
       </div>
    </div>
  )
}

export default Navbar