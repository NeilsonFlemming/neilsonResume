import React, { Component } from 'react';
export default class Certs extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="certs">
                <div className="row cert">
                    <div className="three columns header-col">
                        <h1><span>Certifications</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.certifications && resumeData.certifications.map((item,index) => {
                                return(
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h6> <a href={item.url} target={"_blank"}> {index+1}.{item.name}</a> </h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}