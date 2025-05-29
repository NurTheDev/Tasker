import React from 'react';
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";
import HeroSection from "./Component/HeroSection.jsx";
import TaskBoard from "./Component/TaskBoard.jsx";

function App() {
    return (
        <div className={"bg-[#191D26] font-Inter text-white"}>
            <Header/>
            <HeroSection/>
            <TaskBoard/>
            <Footer/>
        </div>
    );
}

export default App;
