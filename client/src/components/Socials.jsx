import React from 'react'
import instagram from "../static/img/insta-logo.png"
import twitter from "../static/img/twitter-logo.png"
import twitch from "../static/img/twitch-logo.png"
import facebook from "../static/img/facebook-logo.png"

const Socials = () => {
    return (
                <div className="mt-4">
                    <h2>Social Media</h2>
                    <div className="d-flex flex-row justify-content-around social-logos">
                        <div className="d-flex flex-column justify-content-around">
                            <a href="https://www.instagram.com/socialvinylclub/"><img src={instagram} alt="instagram link" className="instagram"/></a>
                            <a href="https://twitter.com/SocialVinylClub"><img src={twitter} alt="twitter link" className="twitter"/></a>
                        </div>
                        <div className="d-flex flex-column justify-content-around">
                            <a href="https://www.twitch.tv/socialvinylclub"><img src={twitch} alt="twitch link" className="twitch"/></a>
                            <a href="https://www.facebook.com/SocialVinylClub"><img src={facebook} alt="facebook link" className="facebook"/></a>
                        </div>
                    </div>
                </div>
    )
}

export default Socials;