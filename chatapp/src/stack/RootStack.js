import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LoginComponent from '../component/LoginComponent';
import MessagesComponent from '../component/MessagesComponent';
import ContactComponent from '../component/ContactComponent';
import NotificationComponent from '../component/NotificationComponent';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tabnavigator = createMaterialBottomTabNavigator({
  MessagesScreen: {
    screen: MessagesComponent,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarOptions: {
        tabStyle: {
          paddingVertical: 10
        },
        style: {
          height: 50,
          backgroundColor: 'white',
          elevation: 10,
          borderTopWidth: 0,
        },
        labelStyle: {
          margin: 0,
          padding: 0,
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
      // tabBarIcon: ({tintColor, focused}) => {
      //   if(focused) {
      //     return (
      //       <MaterialIcons name="message" size={25} color={tintColor} />
      //     )
      //   } else {
      //     return (
      //       <MaterialIcons name="message" size={25} color={tintColor} />
      //     )
      //   }
      // }
    }
  },
  ContactScreen: {
    screen: ContactComponent,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarOptions: {
        tabStyle: {
          paddingVertical: 10
        },
        style: {
          height: 50,
          backgroundColor: 'white',
          elevation: 10,
          borderTopWidth: 0,
        },
        labelStyle: {
          margin: 0,
          padding: 0,
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
      // tabBarIcon: ({tintColor, focused}) => {
      //   if(focused) {
      //     return (
      //       <MaterialIcons name="contacts" size={25} color={tintColor} />
      //     )
      //   } else {
      //     return (
      //       <MaterialIcons name="contacts" size={25} color={tintColor} />
      //     )
      //   }
      // }
    }
  },
  NotificationScreen: {
    screen: NotificationComponent,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarOptions: {
        tabStyle: {
          paddingVertical: 10
        },
        style: {
          height: 50,
          backgroundColor: 'white',
          elevation: 10,
          borderTopWidth: 0,
        },
        labelStyle: {
          margin: 0,
          padding: 0,
        },
        showIcon: true,
        showLabel: true,
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
      // tabBarIcon: ({tintColor, focused}) => {
      //   if(focused) {
      //     return (
      //       <MaterialIcons name="notifications" size={25} color={tintColor} />
      //     )
      //   } else {
      //     return (
      //       <MaterialIcons name="notifications" size={25} color={tintColor} />
      //     )
      //   }
      // }
    }
  },
}, {
  initialRouteName: 'MessagesScreen',
  activeColor: 'green',
  inactiveColor: 'gray',
  barStyle: {
    backgroundColor: 'white',
  },
  shifting: true,
});

const Stacknavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  HomeScreen: {
    screen: Tabnavigator,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(Stacknavigator);
