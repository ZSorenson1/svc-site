import React from 'react'
import mainbody from "../static/img/main-body.jpg"
import img2 from "../static/img/sliderimg2.JPG"
import img3 from "../static/img/sliderimg3.jpg"
import img4 from "../static/img/sliderimg4.jpg"
import img5 from "../static/img/sliderimg5.jpg"
import Socials from "./Socials"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = [mainbody, img2, img3, img4, img5]

let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}


const Body = () => {
    return (
        <div className="d-flex flex-row justify-content-between mt-3">
            <Slider {...settings} className="slider">
                {images.map((image , i) => {
                    return (
                        <img src={image} />
                        
                    )
                })}
            </Slider>
            <div>
                <div className="ml-3">
                    <h2>Latest Release</h2>
                    <iframe src="https://open.spotify.com/embed/album/64BXLhbDRRA56aCrwNQIlO" width="400" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                <Socials />
            </div>
        </div>
    )
}


export default Body;