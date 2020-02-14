import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {

        clicked: false
    }

    clickHandler = () => {

        this.setState({ clicked : true})
    }

    render() {
        return (
            <main className="home">

                <h1 className="home_title">
                    Welcome to the Zoo !!!
                </h1>
                <h4 className="home_description">
                    Select any animal to see its details.
                </h4>

                <div className="home_container">

                    <Link to={{pathname:`/specifications`, id:"lion"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item lion">
                           <div className="home_container-img lion"></div>
                           <div className="home_container-description lion"></div>
                        </div>
                    </Link>
                    <div className="home_container-item elephant">
                       <div className="home_container-img elephant"></div>
                    </div>
                    <div className="home_container-item owl">
                       <div className="home_container-img owl"></div>
                    </div>
                    <div className="home_container-item tiger">
                       <div className="home_container-img tiger"></div>
                    </div>
                    <div className="home_container-item bear">
                       <div className="home_container-img bear"></div>
                    </div>
                    <div className="home_container-item rabbit">
                       <div className="home_container-img rabbit"></div>
                    </div>
                    <div className="home_container-item hippo">
                       <div className="home_container-img hippo"></div>
                    </div>
                    <div className="home_container-item giraffe">
                       <div className="home_container-img giraffe"></div>
                    </div>

                </div>  {/*  main_container */}
            </main>
        );
    }
}

export default Home;