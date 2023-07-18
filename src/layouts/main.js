import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer/footer'

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main