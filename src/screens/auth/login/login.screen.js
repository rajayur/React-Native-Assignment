import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './login.screen.style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {COLORS, NAVIGATION} from '../../../constants';

const ReviewSchema = yup.object({
  userName: yup.string().required('Please enter user name'),
  password: yup.string().required('Please enter password'),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      userData: this.props.user,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginLabel}>Login</Text>

        <Formik
          initialValues={{userName: 'hruday@gmail.com', password: 'hruday123'}}
          validationSchema={ReviewSchema}
          enableReinitialize={true}
          onSubmit={async (values, action) => {
            this.setState({message: ''});
            if (
              values.userName === this.state.userData.username &&
              values.password === this.state.userData.password
            )
              this.props.navigation.navigate(NAVIGATION.DashBoard);
            else this.setState({message: 'Invalid credentials'});
          }}>
          {(prop) => (
            <View style={{width: '100%'}}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    this.password.focus();
                  }}
                  placeholder="User Name"
                  placeholderTextColor={COLORS.labelColor}
                  onChangeText={prop.handleChange('userName')}
                  value={prop.values.userName}
                  onBlur={prop.handleBlur('userName')}
                />
              </View>
              {prop.touched.userName && prop.errors.userName ? (
                <Text style={styles.errorText}>
                  {prop.touched.userName && prop.errors.userName}
                </Text>
              ) : (
                <Text></Text>
              )}

              <View style={styles.inputView}>
                <TextInput
                  ref={(input) => {
                    this.password = input;
                  }}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={COLORS.labelColor}
                  onChangeText={prop.handleChange('password')}
                  value={prop.values.password}
                  secureTextEntry={true}
                  onBlur={prop.handleBlur('password')}
                />
              </View>
              {prop.touched.password && prop.errors.password ? (
                <Text style={styles.errorText}>
                  {prop.touched.password && prop.errors.password}
                </Text>
              ) : (
                <Text></Text>
              )}
              {this.state.message ? (
                <Text style={styles.errorText}>{this.state.message}</Text>
              ) : (
                <Text></Text>
              )}

              <TouchableOpacity onPress={prop.handleSubmit}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(Login);
