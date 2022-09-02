import React from 'react';
import Home from '../container/Home/Home'
import Speakers from '../container/Speakers/Speakers'
import Schedule from '../container/Schedule/Schedule'
import Registration from '../container/Registration/Resgistration'
import Blog from '../container/Blog/Blog'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Linking = ()=>{
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/registration" element={<Registration />} />
                <Route path='/blog' element={<Blog />} />

            </Routes>


        )

}


export default Linking;