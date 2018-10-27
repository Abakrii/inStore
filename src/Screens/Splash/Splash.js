import React , {Component} from 'react';
import {Box} from "react-native-design-utility"
import OnBoardingLogo from '../../commons/onBoardingLogo';
import {View} from 'react-native';
class Splash extends Component{
    state = {};

    componentDidMount(){
        this.moveToAuth();
    }

    moveToAuth = () =>{
         setTimeout(()=>{
             this.props.navigation.navigate('Authentication')
         },2000)
    };
    render(){
        return(
                <Box f={1} center>

                  <OnBoardingLogo />

                </Box>
        );
    }
}

export default Splash;
