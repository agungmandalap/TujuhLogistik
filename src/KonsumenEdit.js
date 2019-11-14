import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Button,
  Text,
  Platform,
  TouchableOpacity,
  ListView,
  ActivityIndicator
} from 'react-native';

export default class EditbarangRecordActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_id: '',
      TextInput_nama: '',
      TextInput_alamat: '',
      TextInput_telepon: '',
      TextInput_keterangan: '',


    };
  }

  componentDidMount() {
    // Received barang Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_id: this.props.navigation.state.params.ID,
      TextInput_nama: this.props.navigation.state.params.NAMA,
      TextInput_alamat: this.props.navigation.state.params.ALAMAT,
      TextInput_telepon: this.props.navigation.state.params.TELEPON,
      TextInput_keterangan: this.props.navigation.state.params.KETERANGAN,
    });
  }

  static navigationOptions = {
    title: 'EditKonsumenRecordActivity'
  };

  

  UpdatekonsumnRecord = () => {

    fetch('http://192.168.1.119:8080/konsumn/edit/' + this.state.TextInput_id, {
      method: 'PUT',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nama: this.state.TextInput_nama,
        alamat: this.state.TextInput_alamat,
        telepon: this.state.TextInput_telepon,
        keterangan: this.state.TextInput_keterangan,
      }),
    })
    .then(response => response.text())
    .then(response => {
      // Showing response message coming from server after inserting records.
      Alert.alert(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  DeletekonsumnRecord = () => {
    fetch('http://192.168.1.119:8080/konsumn', {
      method: 'DELETE',
      headers: {
        Accept: 'text/plain',
      },
      body: JSON.stringify({
        id: this.state.TextInput_id
      }),
    })
    .then(response => response.text())
    .then(response => {
      // Showing response message coming from server after inserting records.
      Alert.alert(response);
      })
      .catch(error => {
        console.error(error);
      });

    this.props.navigation.navigate('halamanUtama');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}>
          {' '}
          Edit Konsumen Record Form{' '}
        </Text>        

        <TextInput
          placeholder='Nama Konsumen'
          value={this.state.TextInput_nama}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_nama: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder='Alamat Konsumen'
          value={this.state.TextInput_alamat}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_alamat: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder='Telepon Konsumen'
          value={this.state.TextInput_telepon}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_telepon: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder='Keterangan'
          value={this.state.TextInput_keterangan}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_keterangan: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdatekonsumnRecord}
        >
          <Text style={styles.TextStyle}> UPDATE DATA KONSUMEN </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeletekonsumnRecord}
        >
          <Text style={styles.TextStyle}> DELETE DATA KONSUMEN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
