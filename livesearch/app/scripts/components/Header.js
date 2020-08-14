import React, {useState} from "react";
import Menu from "./Menu";
import SearchContainer from "./SearchContainer";

const Header = () => {

    const [showingSearch, setShowingSearch] = useState(false);  

    const toggleSearch = (e) => {
        e.preventDefault();
        setShowingSearch(!showingSearch);
    }

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                <div className="brand-logo"></div>
                <Menu />
                </div>
            </div>

            <div className="search-icon">
                <a href="#" onClick={toggleSearch}>
                    <i className="material-icons search">search</i>
                </a>
            </div>

            {showingSearch ? 
                <SearchContainer 
                    toggleSearch={toggleSearch}
                />
            : null} 
        
        </header>
    );
};

export default Header;
