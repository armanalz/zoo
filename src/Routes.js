import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import Home from './components/Home';
import Specifications from './components/Specifications';


class Routes extends Component {

   render() {

      let time= this.props.location.close === "kkk" ? 1400 : 0
console.log(this.props.location.close, time)
      return(

         <Route render={({location}) => (
            <TransitionGroup>

               <CSSTransition classNames="fade" timeout={this.props.location.close === "kkk" ? 0 : 1400} key={location.pathname} 
           
               >
            
                  <Switch location={location}>
                        <Route  exact component={Home} path="/"/>
                        <Route  component={Specifications} path="/specifications"/>
                  </Switch>

               </CSSTransition>
               
            </TransitionGroup>
         )}/>
      
      );
   }
}

export default Routes;
