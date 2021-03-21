import React from 'react'
import { Link } from 'react-router-dom'


function NewsHeadline(props) {
    return (
        <>
            <section className="container news">
                <div className="banner-wrapper-dash">
                    <div className="label-section-dash">
                        News
                    </div>
                    <img className="bn-background-news-dash" src={props.bannerImage} alt=""/>
                    <span className="bn-shadow-news-dash"></span>
                    <h5 className="txt-headline-news-dash">{props.headlineTitle}</h5>
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
        </>
    )
}

export default NewsHeadline
