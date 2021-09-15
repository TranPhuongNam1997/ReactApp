import React, { Component } from 'react';
import ChangeToSlug from './../Helper/index'


class NewsRelated extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            
            <div className="col-lg-3">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.nameImg} alt="" />
                    <div className="card-body">
                        <h4 className="card-title"><a href={"/detail/" + ChangeToSlug(this.props.title) + "." + this.props.postId}>{this.props.title}</a></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsRelated;