import React from 'react'
import banner from "../static/img/banner-logo.png"
import { Link } from '@reach/router'


const Navbar = () => {
    return (
        <div className="d-flex flex-column Navbar">
            <img src={banner} alt="Social Vinyl Club Banner" />
            <div className="d-flex flex-row justify-content-around">
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/about"><h3>About</h3></Link>
                <Link to="/shows"><h3>Shows</h3></Link>
                <Link to="/merch"><h3>Merch</h3></Link>
                <a href="https://socialvinylclub.bandcamp.com/"><h3>Bandcamp</h3></a>
                <a href="https://open.spotify.com/artist/0xE4G4E4W8zQf0xQWggRVI"><h3>Spotify</h3></a>
            </div>
        </div>
    )
}

export default Navbar;