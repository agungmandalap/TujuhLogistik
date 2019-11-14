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
      TextInput_namaBarang: '',
      TextInput_hargaJual: '',
      TextInput_hargaBeli: '',
      TextInput_Satuan: '',


    };
  }

  componentDidMount() {
    // Received barang Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_id: this.props.navigation.state.params.ID,
      TextInput_namaBarang: this.props.navigation.state.params.namaBarang,
      TextInput_hargaJual: this.props.navigation.state.params.hargaJual,
      TextInput_hargaBeli: this.props.navigation.state.params.hargaBeli,
      TextInput_Satuan: this.props.navigation.state.params.Satuan,
    });
  }

  static navigationOptions = {
    title: 'EditbarangRecordActivity'
  };

  UpdatebarangRecord = () => {
    fetch('http://192.168.1.119:8080/barang/edit/', {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        namaBarang: this.state.TextInput_namaBarang,
        hargaJual: this.state.TextInput_hargaJual,
        hargaBeli: this.state.TextInput_hargaBeli,
        Satuan: this.state.TextInput_Satuan,
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

  DeletebarangRecord = () => {
    fetch('http://192.168.1.119:8080/barang', {
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

    this.props.navigation.navigate('barangMain');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 7 }}>
          {' '}
          Edit barang Record Form{' '}
        </Text>

        

        <TextInput
          placeholder='namaBarang barang'
          onChangeText={TextInputValue =>
            this.setState({ TextInput_namaBarang: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder='hargaJual barang'
          onChangeText={TextInputValue =>
            this.setState({ TextInput_hargaJual: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder='hargaBeli barang'
          onChangeText={TextInputValue =>
            this.setState({ TextInput_hargaBeli: TextInputValue })
          }
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
                  placeholder='Satuan barang'
                  onChangeText={TextInputValue =>
                    this.setState({ TextInput_Satuan: TextInputValue })
                  }
                  underlineColorAndroid='transparent'
                  style={styles.TextInputStyleClass}
                />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdatebarangRecord}
        >
          <Text style={styles.TextStyle}> UPDATE DATA BARANG </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeletebarangRecord}
        >
          <Text style={styles.TextStyle}> DELETE DATA BARANG </Text>
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
