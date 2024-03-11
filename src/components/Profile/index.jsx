import React from 'react';

import ProfileImage from '../../assets/img/profile_pic.jpg';

import './index.scss'

class Profile extends React.Component {
    render() {
        return (
            <div className="Profile">
                <h1>Profile</h1>
                <div>
                    <div className="profile-pic">
                        <img src={ProfileImage}></img>
                    </div>
                    <div className="profile-content">
                        <div className="row">
                            <div className="label">Name</div>
                            <div className="value">Alpha Lau</div>
                        </div>
                        <div className="row">
                            <div className="label">Birthday</div>
                            <div className="value">16<sup>th</sup> November, 1998</div>
                        </div>
                        <div className="row">
                            <div className="label">Title</div>
                            <div className="value">
                                App developer<br></br>
                                Backend developer<br></br>
                                Frontend developer<br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="label">Location</div>
                            <div className="value">Hong Kong</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile