import {createStackNavigator , createSwitchNavigator , createBottomTabNavigator} from 'react-navigation';
import React , {Component} from 'react';


const AuthNavigator = createStackNavigator(
  {
    Authentication: {
      getScreen: () => require('./Screens/Authentication/Authentication').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createBottomTabNavigator({
   Home : () => require ("./Screens/Home/Home").default,
});

const MainNavigator = createStackNavigator({
        Tab : TabNavigator
});

const AppNavigator = createSwitchNavigator(
    {
        Splash: {
            getScreen: () => require('./Screens/Splash/Splash').default,
        },
             Auth: AuthNavigator,
             Main: MainNavigator,
         },

        {
             initialRouteName : 'Splash' ,
         }

    );

    class Navigation extends Component{

        state= {}

        render(){
            return <AppNavigator/>;

        }
    }

    export default Navigation;