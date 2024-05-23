import React, { useEffect, useState } from "react";
import { getCache } from "../../cache/cache";
import './navbar.css'

const Navbar =()=>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setUser(getCache('user'));
    },[])

    if(user){
        if(user.encryptionKey){
            return(
                <div>
                    Admin
                </div>
            );
        } else{
            return(
                <div>
                    User
                </div>
            );
        }
    } else{
        return(
            <nav className="navhead">
                <ul className="ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;