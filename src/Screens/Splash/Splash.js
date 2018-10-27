import React , {Component} from 'react';
import {Box , Text} from "react-native-design-utility"
import {Image} from 'react-native';
import {images} from "../../constants/images/images";

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
                    <Box mb="sm">
                 <Image source={images.logo}/>
                              </Box>
                    <Text size="2xl">In
                        <Text size="2xl" color="green">Store</Text>
                    </Text>
                    <Text size="sm">Easy Grocery Shopping</Text>
                </Box>
        );
    }
}

export default Splash;
