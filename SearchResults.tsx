import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

type propsType = {
  route?: any;
  navigation?: any;
};

const resultItem = ({item}: {item: any}) => {
  return (
    <TouchableHighlight underlayColor={'#dddda'}>
      <View style={componenetStyles.LineContainer}>
        <View style={componenetStyles.textContainer}>
          <Text style={componenetStyles.OfficailName}>
            {item?.name?.official}
          </Text>
          <Text style={componenetStyles.otherText}>{item?.region}</Text>
          <Text style={componenetStyles.otherText}>{item?.subregion}</Text>
          <Text style={componenetStyles.otherText}>{item?.capital}</Text>
          <Text style={componenetStyles.otherText}>{item?.population}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const SearchResults = ({navigation, route}: propsType): JSX.Element => {
  console.log(route?.params?.data);

  return (
    <FlatList
      data={route?.params?.data}
      renderItem={resultItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const componenetStyles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#EE82EE',
  },
  OfficailName: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },

  otherText: {
    fontSize: 20,
    color: '#656565',
  },
  LineContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default SearchResults;
