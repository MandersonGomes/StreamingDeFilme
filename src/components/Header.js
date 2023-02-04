import React from 'react'
import './Header.css'

function Header({black}) {
    return(
        <header className={black ? 'logoBlack' : ''}>
            <div className="headerLogo">GH Movies</div>
            <form>
                <input type="text" name="user" id="user" placeholder="Search"/>
            </form>
        </header>
    );
}

export default Header