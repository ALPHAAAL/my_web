import React from 'react';
import './index.scss';

class Timeline extends React.Component {
    render() {
        return (
            <div className='Timeline'>
                <section>
                    <div className='title'>
                        <h1>Timeline</h1>
                    </div>
                    <div id="content" className='education'>
                        <h1>Education</h1>
                        <ul className="timeline">
                            <li className="event" data-date="2016 - Now">
                                <h3>HKUST</h3>
                                <p>Entered HKUST computer science</p>
                            </li>
                            <li className="event" data-date="2019 Jan - June">
                                <h3>University of Exeter</h3>
                                <p>Exchange in University of Exeter (#11 in UK)</p>
                            </li>
                        </ul>
                    </div>
                    <div id="content" className='work'>
                        <h1>Education</h1>
                        <ul className="timeline">
                            <li className="event" data-date="2018 Jan - Now">
                                <h3>Join beNovelty</h3>
                                <p>beNovelty is a tech startup focus on API technology, I work here as app developer intern.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Timeline