import React , {Component} from 'react';
import {Box , Text} from "react-native-design-utility"
import OnBoardingLogo from '../../commons/onBoardingLogo';
import {TouchableOpacity , Animated , Button} from 'react-native';
import LoginButton from '../../commons/LoginButton';
class Authentication extends Component{
    state = {
            opacity : new Animated.Value(0),
             position : new Animated.Value(0)
    };

    componentDidMount(){
        Animated.parallel([this.positionAnim() , this.opacityAnim()]).start();
     //   this.opacityAnim()
     //   this.positionAnim()
    }

    opacityAnim =()=>{
        Animated.timing(this.state.opacity,{
            toValue : 1,
            duration: 200,
            delay:100
        }).start()
    };


     positionAnim =()=>{
        Animated.timing(this.state.position,{
            toValue : 1,
            duration: 300,
            useNativeDriver : true,
        }).start()
    };
   render() {
       const logoTranslate = this.state.position.interpolate({
           inputRange : [0,1],
           outputRange : [150 , 0],
       })
       const opacity = this.state.opacity;
    return (


      <Box f={1} center bg="white">
          <Animated.View style={{flex:1,
          transform:[{
              translateY :  logoTranslate
          }]
          }}>
          <Box f={1} center>
              <OnBoardingLogo />
          </Box>
          </Animated.View>
            <Animated.View style={{flex:0.9 , width:'100%' , opacity} }>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
            </Animated.View>
      </Box>
    );
  }
}

export default Authentication;
