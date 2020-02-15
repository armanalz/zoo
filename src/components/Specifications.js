import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Specifications extends Component {
    
    componentDidMount(){
        this.transformHandler()
        console.log(this.props.location.id)
    }

    state = {

        transformClass: "primary",
        animation: ""
    }

    transformHandler = () => {

        this.setState({

            animation : `${this.props.location.id}-span`

        })

        setTimeout( ()  => { this.setState({

            transformClass : "secondary"

        })}, 1700)
       
    }

  onmHandler = () => {

        this.setState({

            animation : `${this.props.location.id}-spand`

        })
    }

    render() {

        let imgClass,backgroundImg

        imgClass = this.props.location.id;
        backgroundImg = require(`../resources/img/${imgClass}.png`)

        return (
            <main className="specifications">
                <div className={`specifications_img ${this.state.transformClass} ${imgClass}`}
                     style={{ 
                              animationName: this.state.animation,
                     }}
                >
                    <div className={`specifications_img-wrapper ${imgClass}`}
                        style={{ 
                            backgroundImage: `url(${backgroundImg})`
                        }}
                    >
                    </div>
                </div>
                <div className="specifications_description">
                    <Link to="/" exact onClick={() => this.onmHandler()}>
                        hhh
                    </Link>
                </div>
            </main>
        );
    }
}

export default Specifications;