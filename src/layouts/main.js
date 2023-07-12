import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            Footer
        </div>
    )
}

export default Main