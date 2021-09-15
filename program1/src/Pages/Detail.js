import React, { Component } from 'react';
import NewsRelated from './../Component/NewsRelated';
import listPost from './../DataJson/index'



class Detail extends Component {
    constructor(props) {
        super(props);
    }
    getPostDetail = () => {
        //lay id truyen sang
        console.log(this.props.match.params.id)

        // tim kiem trong list co id trung
        let itemDetail = listPost.filter(item => item.id == this.props.match.params.id)

        console.log(itemDetail)
        if (itemDetail && itemDetail.length) {
            return (
                <div>
                    <div className="container px-5 mt-5">
                        <h4 className="mb-4">{itemDetail[0].title}</h4>
                        <div className="text-left">
                            <img src={itemDetail[0].nameImg} className="w-100" alt="" />
                        </div>
                        <div className="mb-5 mt-4">{itemDetail[0].description}</div>
                    </div>

                </div>
            );

        }
    }
    render() {
        let dem = 1;
        return (

            <div>
                {this.getPostDetail()}
                <div className="container px-5 mt-4">
                    <h3 className="text-center mb-4">NewsRelated</h3>
                    <div className="row">
                        {
                            listPost.map((value, key) => {
                                if(value.id != this.props.match.params.id){
                                    if (dem <= 4) {
                                        dem++;
                                        return(
                                            <NewsRelated
                                                key={key}
                                                postId={value.id}
                                                nameImg={value.nameImg}
                                                title={value.title}
                                                description={value.description}
                                            />
                                        )
                                    }
                                }
                            })
                        }

                    </div>
                </div>
            </div>
        )







    }
}

export default Detail;