import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './utilities/Icon';


class Specifications extends Component {
    
    componentDidMount(){
        this.transformHandler()
       
    }

    state = {

        transformClass: "primary",
        close: false,
        animation: "",
        opacity: 0,
        values: {
            lion:["lion is very good", "4 years", "40 km/h", "100 kg", "he can sing"],
            elephant:["elephant is very good", "6 years", "20 km/h", "4000 kg", "he can dance"],
            owl:["owl is very good", "9 years", "50 km/h", "5 kg", "he can smoke"],
            tiger:["tiger is very good", "7 years", "49 km/h", "110 kg", "he can read"],
            bear:["bear is very good", "8 years", "30 km/h", "700 kg", "he can play guitar"],
            rabbit:["rabbit is very good", "3 years", "60 km/h", "3 kg", "he can paint"],
            hippo:["hippo is very good", "11 years", "25 km/h", "2000 kg", "he can cook"],
            giraffe:["giraffe is very good", "16 years", "33 km/h", "400 kg", "he can drive"]
        }
    }

    transformHandler = () => {

        this.setState({

            animation : `${this.props.location.id}-span`

        })

        setTimeout( ()  => { this.setState({

            opacity: 1

        })}, 1400)

        setTimeout( ()  => { this.setState({

            transformClass : "secondary"

        })}, 1700)
       
    }

  onmHandler = () => {

        this.setState({

            animation : `${this.props.location.id}-spand`,
            opacity: 0,
            close: true

        })
    }

    render() {

        let itemClass,backgroundImg,value

        itemClass = this.props.location.id
        backgroundImg = require(`../resources/img/${itemClass}.png`)

        switch(itemClass) {

                case "lion":
                    value = this.state.values.lion;
                    break
                case "elephant":
                    value = this.state.values.elephant;
                    break
                case "owl":
                    value = this.state.values.owl;
                    break
                case "tiger":
                    value = this.state.values.tiger;
                    break
                case "bear":
                    value = this.state.values.bear;
                    break
                case "rabbit":
                    value = this.state.values.rabbit;
                    break
                case "hippo":
                    value = this.state.values.hippo;
                    break
                case "giraffe":
                    value = this.state.values.giraffe;
                    break 
                default:  
                    value = "";  
               
        }
          

        return (
            <main className={`specifications ${this.state.transformClass}`}>
                <div className={`specifications_img ${this.state.transformClass} ${itemClass}`}
                     style={{ 
                              animationName: this.state.animation,
                     }}
                >
                    <div className={`specifications_img-wrapper ${itemClass}`}
                        style={{ 
                            backgroundImage: `url(${backgroundImg})`
                        }}
                    >
                    </div>
                </div>
                <div className={`specifications_description ${this.state.transformClass}`} style={{opacity: this.state.opacity}}>
                    <Link to={{pathname:`/`, close:"kkk"}} exact onClick={() => this.onmHandler()} 
                          className="specifications_description-link"
                    >
                        <Icon name="arrow-left2"/>
                        <p className="specifications_description-link--txt">back to home</p>
                    </Link>
                    <h1 className="specifications_description-item title">{itemClass}</h1>
                    <p className="specifications_description-value">{value[0]}</p>
                    <h4 className="specifications_description-item">life span</h4>
                    <p className="specifications_description-value">{value[1]}</p>
                    <h4 className="specifications_description-item">speed</h4>
                    <p className="specifications_description-value">{value[2]}</p>
                    <h4 className="specifications_description-item">weight</h4>
                    <p className="specifications_description-value">{value[3]}</p>
                    <h4 className="specifications_description-item">interesting facts</h4>
                    <p className="specifications_description-value">{value[4]}</p>
                </div>
            </main>
        );
    }
}

export default Specifications;