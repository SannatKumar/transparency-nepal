import React,{Component} from 'react';
import './blog.css';


class Blog extends Component{
    render(){
        return(
            <div className = "mainblog">
            <div className="mainwrap">
                <div className="topbar">
                    <div className = "mainhead">
                        <div className = "bodywrap">
                            <div className = "row">
                                <div className = "col-8">
                                    <p> Here will be the Blog</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default Blog;