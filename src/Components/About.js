import React, { Component } from 'react';
import jsIcon from "../icons/iconfinder_187_Js_logo_logos_4373213.png";
import nodeJsIcon from "../icons/iconfinder_233_Node_Js_logo_4375017.png";
import bsIcon from "../icons/iconfinder_Bootstrap_682700.png";
import html from "../icons/iconfinder_html5_386722.png";
import react from "../icons/iconfinder_react_js_1322468.png";
import mongdb from "../icons/icons8-mongodb-512.png";
import pgAdmin from "../icons/icons8-postgresql-512.png";
import sass from "../icons/icons8-sass-512.png";
import express from "../icons/icons8-js-80.png";
import css from "../icons/icons8-css3-512.png";
import rxjs from "../icons/Rx_Logo-512-512.png";
import npm from "../icons/icons8-npm-480.png";
import git from "../icons/iconfinder_social_media_social_media_logo_git_2993773.png";

class About extends Component {
    render() {

        if(this.props.data){
            var profilepic= "images/"+this.props.data.image;
            var bio = this.props.data.bio;

        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={profilepic} alt="Aby Babu pic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p  dangerouslySetInnerHTML={{
                            __html: bio && bio.replace(/\n/gi, '<br />'),
                        }}></p>
                        <div><hr/>
                        </div>
                        <div className="about-me">
                            <div className="about-me-icons">
                                <img src={html} style={{width: "35px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={css} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={bsIcon} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={sass} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={jsIcon} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={react} style={{width: "40px"}} alt=""/>
                            </div>

                        </div>
                        <div className="about-me">
                            <div className="about-me-icons">
                                <img src={npm} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={nodeJsIcon} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={rxjs} style={{width: "40px"}} alt=""/>
                            </div>

                            <div className="about-me-icons">
                                <img src={mongdb} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={pgAdmin} style={{width: "40px"}} alt=""/>
                            </div>
                            <div className="about-me-icons">
                                <img src={git} style={{width: "40px"}} alt=""/>
                            </div>
                        </div>
                        <div>
                            <hr/>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
