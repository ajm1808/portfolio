import React from 'react';
import './page4.css';
import Navbar4 from './Navbar4';
import Contacts from './Contacts';

const Page4 =()=>{
    return(
        <div className="Page4">
            <Navbar4/>
            <div className="contactsbg">
                <Contacts/>
            </div>
        </div>
    )
}

export default Page4;