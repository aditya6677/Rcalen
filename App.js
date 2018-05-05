import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, AppRegistry  } from 'react-native';

export default class Bananas extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    fetch('http://letscode.live:5000/api')
      .then((response) => response.json())
      .then((responseJson) => { this.setState({
                                     isLoading: false,
                                     dataSource: responseJson.result.ongoing,
        });
      });
  }

  render() {
    return(

      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.Name}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
  }
}

AppRegistry.registerComponent('Rcalen', () => Bananas);
