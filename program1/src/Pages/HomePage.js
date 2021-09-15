import React, { Component } from 'react';
import Header from '../Component/Header';
import ItemPost from '../Component/ItemPost';
import listPost from './../DataJson/index' 
import NewsRelated from '../Component/NewsRelated' 


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5">                            
                            {
                                listPost.map((value,key) =>
                                    <ItemPost 
                                        key={key}
                                        postId={value.id}
                                        nameImg={value.nameImg}
                                        title={value.title}
                                        description={value.description}
                                    />
                                )
                            }
                        </div>
                        {/* Call to action*/}
                        <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
                            <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                                <div className="mb-4 mb-xl-0">
                                    <div className="fs-3 fw-bold text-white">New products, delivered to you.</div>
                                    <div className="text-white-50">Sign up for our newsletter for the latest updates.</div>
                                </div>
                                <div className="ms-xl-4">
                                    <div className="input-group mb-2">
                                        <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                                        <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                                    </div>
                                    <div className="small text-white-50">We care about privacy, and will never share your data.</div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;