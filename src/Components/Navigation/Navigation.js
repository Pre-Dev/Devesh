import React from 'react';
import './Navigation.css';



const Navigation = ({ onHomeChange, onBlogChange, onTutorialChange, onServiceChange, onHamburgerInput, onDownloadChange }) => {
    return(
        <div>
            <div className="nav-items">
                <ul type="none" className="navigation">
                    <li className="logo">Devesh <font color="reddish pink">Korde</font> </li>
                    <li className="logo" id="hamburger"><button className="nav_ham_button" onClick={onHamburgerInput}> 
                    <i>.</i>
                    <i>.</i>
                    <i>.</i>
                    </button></li>
                    <li className="link"><button className="navigation_button" onClick={ onDownloadChange }>Downloads</button></li>
                    <li className="link" ><button className="navigation_button" onClick={ onServiceChange }>Services</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onTutorialChange }>Tutorials</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onBlogChange }>Blogs</button></li>
                    <li className="link"><button className="navigation_button" onClick={ onHomeChange }>Home</button></li>
                </ul>               
            </div>
        </div>
    );
}

export default Navigation;