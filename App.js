import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Platform, Keyboard } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { NavigationContainer } from '@react-navigation/native';
import ConfiguredStore from './src/redux/store';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS, NAVIGATION } from './src/constants';

import LoginScreen from './src/screens/auth/login/login.screen';
import DashBoardScreen from './src/screens/app/dashboard/dashboard.screen';

const Stack = createStackNavigator();

export default class App extends Component {
  keyboardDidShowListener;

  constructor(props) {
    super(props);
    this.state = {
      primaryColor: COLORS.primary,
      marginBottom: 0
    };
  }

  componentDidMount = async () => {

    try {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    } catch (error) {
      console.log(error);
    }
  }

  keyboardDidShow = async (e) => {
    this.setState(_ => ({
      marginBottom: Platform.OS === 'android' ? 0 : e.endCoordinates.height - getBottomSpace()
    }));
  }

  keyboardDidHide = async (e) => {
    this.setState(_ => ({
      marginBottom: 0
    }));
  }

  render() {

    const { primaryColor, marginBottom } = this.state;

    return (
      <>
        <SafeAreaView style={{ ...styles.topSafeArea, backgroundColor: primaryColor }} />
        <SafeAreaView style={{ ...styles.bottomSafeArea, backgroundColor: primaryColor }} >
          <StatusBar barStyle='light-content' backgroundColor={primaryColor} />
          <View style={{ ...styles.bottomSafeArea, paddingBottom: marginBottom }}>
              <Provider store={ConfiguredStore.store}>
                <PersistGate loading={null} persistor={ConfiguredStore.persistor}>

                  <NavigationContainer>
                    <Stack.Navigator
                      screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                        ...(Platform.OS === 'android' && TransitionPresets.FadeFromBottomAndroid),
                        ...TransitionPresets.SlideFromRightIOS
                      }}
                    >
                      <Stack.Screen name={NAVIGATION.Login} component={LoginScreen} />
                      <Stack.Screen name={NAVIGATION.DashBoard} component={DashBoardScreen} />
                    </Stack.Navigator>
                  </NavigationContainer>
                </PersistGate>
              </Provider>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0
  },
  bottomSafeArea: {
    flex: 1
  },
});

