import React, { Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

class Contact extends Component {
    constructor(props) {

        super(props);

        this.state = {
            redirectHome: true,
        }
    }
    FormValue = (e) =>{

        let namefiled = e.target.name;
        let valuefiled = e.target.value
        //tu dong add gia tri vao cac truong name ma khong can phai khai bao
        this.setState({
            [namefiled] : valuefiled
        })
        console.log("fullname = ", this.state.fullname);
    }

    handleSubmitForm = (event) =>{
        event.preventDefault();
        this.setState({
            redirectHome: false,
        });
        
        let data = {
            fullname : this.state.fullname,
            email    : this.state.email,
            phone    : this.state.phone,
            message  : this.state.message
        }
        console.log("data = ", data);
        
    }
    render() {
        if(!this.state.redirectHome){
            return <Redirect push to="/"/>
        }
        return (
            <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope" /></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input onChange={(e)=>this.FormValue(e)} className="form-control" id="name" name="fullname" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input onChange={(e)=>this.FormValue(e)} className="form-control" id="email" name="email" type="text" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input onChange={(e)=>this.FormValue(e)} className="form-control" id="phone" name="phone" type="text" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea onChange={(e)=>this.FormValue(e)} className="form-control" id="message" name="message"  type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" defaultValue={""} />
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/* Submit Button*/}
                                    <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit" onClick={(event) => this.handleSubmitForm(event)}>Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Contact cards*/}
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-chat-dots" /></div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-people" /></div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-question-circle" /></div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone" /></div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
        
    }
}

export default Contact;