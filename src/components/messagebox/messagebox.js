import React, { useEffect, useState } from "react";
import { getCache } from "../../cache/cache";
import './messagebox.css'
import axios from "axios";

const Messagebox =()=>{
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    useEffect(()=>{
        setUser(getCache('user'));
    });
    const handleSubmit =async()=>{
        if(email && message){
            console.log(email);
            console.log(message);
            const res = await axios.post('http://localhost:4000/messages/', {
                email,
                message
            });
            if(res.data.status===undefined){
                alert("Message sent");
                setEmail('');
                setMessage('');
            }
            else{
                alert("Message not sent");
            }
        }
    }
    return(
        <div className="messageboxcontainer">
            <div className="messagebox">
                <div className="messageboxsection">
                    <div>
                        <p>Email</p>
                    </div>
                    <div>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="textbox"/>
                    </div>
                    <div>
                        <p>Message</p>
                    </div>
                    <div>
                        <input value={message} onChange={(e)=>setMessage(e.target.value)} className="sendmessage" type="textbox"/>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messagebox;