import React from 'react';
import './Download.css';
import Cpp from './cpp.pdf';

const Downloads = () => {
    return (
       <div className="downloads_container">
           <div className="downloads_margin">
               <div className="downloads">
                    <h1 className="downloads_heading">C++ Programming</h1>
                    <p className="downloads_para">A guide for all Cpp Programmers</p>
                    <p className="downloads_para">
                       <ul type="dot" className="downloads_list">
                           <li> Book by Wouter Verkerke (NIKHEF)</li>
                           <li>Concepts explained in a very good way</li>
                           <li>Presentation Type of books</li>
                           <li>Perfect use of arrows, good explantion</li>
                           <li>Simple and sweet</li>
                       </ul> </p>
                    <button className="downloads_button"><a href={Cpp} download="C++.pdf" className="downloads_link">Download</a></button>
               </div>
           </div>
       </div>
    );
}

export default Downloads;