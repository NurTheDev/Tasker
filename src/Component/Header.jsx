import React from 'react';
import Logo from  "../assets/lws-logo-en.svg"
function Header() {
    return (
        <div>
            {/*Navbar Starts*/}
            <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
                <div className="container mx-auto flex items-center justify-between gap-x-6">
                    {/*Logo*/}
                    <a href="/">
                        <img className="h-[45px]" src={Logo || ""} alt="logo" />
                    </a>
                </div>
            </nav>
            {/*Navbar Ends*/}
        </div>
    );
}

export default Header;
