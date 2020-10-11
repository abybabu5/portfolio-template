import React, {Component} from 'react';

class Contact extends Component {
    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>
                    </div>


                </div>

                <div className="row">
                    <div className="columns contact-details">

                        <p className="address">
                            <h4>Address and Phone</h4>
                            <span>{name}</span><br/>
                            <span>{street}<br/>
                                {city} {state}, {zip}
                   </span><br/>
                            <span>{phone}</span><br/>
                            <span>{email}</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href={resumeDownload} className="button"
                               rel="noopener noreferrer"
                               target="_blank">
                                <i className="fa fa-download"></i> Download Resume</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
