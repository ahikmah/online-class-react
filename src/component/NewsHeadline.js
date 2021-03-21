import React from 'react'
import '../assets/css/NewsHeadline.css'
import { Link } from 'react-router-dom'

function NewsHeadline(props) {
    return (
        <div>
            <section className="news-section" className="container">
                <div className="news-banner-wrapper">
                    <div className="label-section">
                        News
                    </div>
                    <img className="news-bn-background" src={props.banner-pict} alt="News Banner Picture"/>
                    <span className="news-bn-shadow"></span>
                    <h5 className="news-headline">{props.headline}</h5>
                    <div className="slider d-flex">
                        <Link to="">
                            <div id="sl1" className="sld active"></div>
                        </Link>
                        <Link to="">
                            <div id="sl2" className="sld "></div>
                        </Link>
                        <Link to="">
                            <div id="sl3" className="sld "></div>
                        </Link>
                        <Link to="">
                            <div id="sl4" className="sld "></div>
                        </Link>
                        <Link to="">
                            <div id="sl5" className="sld "></div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsHeadline
