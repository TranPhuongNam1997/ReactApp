import React, { Component } from 'react';
import ChangeToSlug from './../Helper/index'

class ItemPost extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                    <img className="card-img-top" src={this.props.nameImg} alt="..." />
                    <div className="card-body p-4">
                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                        <a className="text-decoration-none link-dark stretched-link" href={"/detail/" + ChangeToSlug(this.props.title) +"." + this.props.postId}><h5 className="card-title mb-3">{this.props.title}</h5></a>
                        <p className="card-text mb-0">{this.props.description}</p>
                    </div>
                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                <div className="small">
                                    <div className="fw-bold">Kelly Rowan</div>
                                    <div className="text-muted">March 12, 2021 · 6 min read</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemPost;