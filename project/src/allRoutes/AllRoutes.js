import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Destination from '../components/user/feature/Destination'
import Login from '../components/user/feature/Login'
import Signup from '../components/user/feature/Signup'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import Dashboard from '../components/admin/feature/Dashboard'
import Users from '../components/admin/feature/Users'
import Booking from '../components/admin/feature/Booking'
import AdminDestination from '../components/admin/feature/Destination'
import MyBooking from '../components/user/feature/MyBooking'
import Logout from '../components/user/feature/Logout'
import AdminLogin from '../components/admin/feature/Login'
import AdminLogout from '../components/admin/feature/Logout'
import MyProfile from '../components/user/feature/MyProfile'
import UserProtactedModule from '../modules/UserProtactedModule'
import DestinationList from '../components/admin/feature/DestinationList'
import Hotels from '../components/admin/feature/Hotels'
import HotelsList from '../components/admin/feature/HotelsList'
import ForgotPassword from '../components/user/feature/ForgotPassword'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                
                  <Route path='destination' element={<AdminDestination />} />
                  <Route path='destination/edit/:id' element={<AdminDestination />} />
                  
                
            </Routes>
        </>
  )
}





export default AllRoutes