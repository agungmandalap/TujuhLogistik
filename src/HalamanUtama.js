import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';


export default class MainActivity extends Component {
  static navigationOptions = {
    title: 'HALAMAN UTAMA'
  };

  GoTo_Create_barangList_Activity_Function = () => {
      this.props.navigation.navigate('barangMain');
  }
  
  GoTo_Create_konsumenList_Activity_Function = () => {
    this.props.navigation.navigate('konsumenMain');
}

    GoTo_Create_muatanList_Activity_Function = () => {
    this.props.navigation.navigate('muatanMain');
}

  render() {
    return (
      <View style={styles.MainContainer}>
          {/* Resizemode */}
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}} 
       style={styles.imageInternet}
       resizeMode='contain'
       />
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Create_barangList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA BARANG{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Create_konsumenList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA KONSUMEN{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.TouchableOpacityStyle}
          onPress={this.GoTo_Create_muatanList_Activity_Function}
        >
          <Text style={styles.TextStyle}>
            {' '}
            TAMBAHKAN DATA MUATAN{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewContent:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageInternet:{
        width:'90%',
        height:200,
        marginVertical:10,
        borderRadius:50
      },
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'
  },

  MainContainer_For_Show_barangList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },

  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#30cb63',
    borderRadius: 5
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#30cb63'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center'
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});
