import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {


    componentDidMount() {
        
       if(window.innerWidth <= 1000) {

        setTimeout( ()  => { 

            switch(this.props.location.scroll) {

                case "lion":
                    window.scrollTo(0, 0)
                    break
                case "elephant":
                    window.scrollTo(0, 0)
                    break
                case "owl":
                    window.scrollTo(0, 0)
                    break
                case "tiger":
                    window.scrollTo(0, 0)
                    break
                case "bear":
                    window.scrollTo(0, 770)
                    break
                case "rabbit":
                    window.scrollTo(0, 770)
                    break
                case "hippo":
                    window.scrollTo(0, 770)
                    break
                case "giraffe":
                    window.scrollTo(0, 770)
                    break 
                default:  
                    window.scrollTo(0, 0)
            
            }
        }, 800)
       }

       if(window.innerWidth <= 576) {
           
        setTimeout( ()  => { 

            switch(this.props.location.scroll) {

                case "lion":
                    window.scrollTo(0, 0)
                    break
                case "elephant":
                    window.scrollTo(0, 200)
                    break
                case "owl":
                    window.scrollTo(0, 490)
                    break
                case "tiger":
                    window.scrollTo(0, 890)
                    break
                case "bear":
                    window.scrollTo(0, 1100)
                    break
                case "rabbit":
                    window.scrollTo(0, 1390)
                    break
                case "hippo":
                    window.scrollTo(0, 1600)
                    break
                case "giraffe":
                    window.scrollTo(0, 1890)
                    break 
                default:  
                    window.scrollTo(0, 0)
            
            }
        }, 800)
       }
    }

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

                    <Link to={{pathname:`/specifications`, id:"lion", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item lion">
                           <div className="home_container-img lion"></div>
                           <div className="home_container-description lion"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"elephant", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item elephant">
                            <div className="home_container-img elephant"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"owl", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item owl">
                            <div className="home_container-img owl"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"tiger", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item tiger">
                            <div className="home_container-img tiger"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"bear", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item bear">
                            <div className="home_container-img bear"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"rabbit", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item rabbit">
                            <div className="home_container-img rabbit"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"hippo", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item hippo">
                            <div className="home_container-img hippo"></div>
                        </div>
                    </Link>
                    <Link to={{pathname:`/specifications`, id:"giraffe", timeOut:"0"}} exact onClick={ () => this.clickHandler() }>
                        <div className="home_container-item giraffe">
                            <div className="home_container-img giraffe"></div>
                        </div>
                    </Link>

                </div>  {/*  main_container */}
            </main>
        );
    }
}

export default Home;