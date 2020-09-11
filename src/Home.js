import React, {Component} from "react";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
class Home extends Component {
    render() {
        return ( 
            <div >
                <Header />
                <div> Welcome to Jagrat Nepal.com</div>
                <Footer />
        </div>                            
        )
    }
}
export default Home;