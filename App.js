import React from 'react';
import { StyleSheet , ActivityIndicator } from 'react-native';
import {UtilityThemeProvider , Box , Text} from "react-native-design-utility";
import Navigation from "./src/Navigation";
import {images} from "./src/constants/images/images";
import {cacheImages} from "./src/utils/cacheImages";
import {theme} from "./src/constants/theme/theme";

export default class App extends React.Component {

  state ={
    isReady: false
  };

  componentDidMount(){
    this.cacheAssets();
  }

  cacheAssets = () =>{
    const imageAssets = cacheImages(Object.values(images));

       Promise.all([...imageAssets]);
      this.setState({isReady: true});
}

  render() {
    if(!this.state.isReady){
      return(
          <Box f={1} center bg="white">
          <ActivityIndicator/>
          </Box>
      );
    }
    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation/>
      </UtilityThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
