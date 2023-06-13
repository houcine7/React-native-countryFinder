import React, {createElement, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  NativeSyntheticEvent,
  ActivityIndicator,
} from 'react-native';

const SEARCH_INITIAL_STATE = {
  message: '',
};

const SearchPage = ({navigation}: {navigation: any}): JSX.Element => {
  const [searchName, setSearch] = useState('morocco');

  const [loading, setLoading] = useState(false);
  // const navigateTo =useNavigationState() ;
  const [searchResult, setSearchResult] = useState(SEARCH_INITIAL_STATE);

  const handelChange = (e: NativeSyntheticEvent<any>): void => {
    setSearch(e.nativeEvent.text);
  };

  function handelSearch(): void {
    //
    if (searchName.length >= 3) {
      const req = generateRequest(searchName);
      makeRequest(req);
    }
  }

  function makeRequest(req: string): any {
    //
    if (req != null && req) {
      setLoading(true);
      fetch(req, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.length);
          setLoading(false);
          setSearchResult(prevState => {
            return {...prevState, message: 'data fetched successfully'};
          });

          navigation.navigate('Results', {data});
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  //
  function generateRequest(value: string): string {
    return 'https://restcountries.com/v3.1/name/' + value;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Search countries to explore</Text>
        <Text style={styles.text}>Search by name</Text>
      </View>
      <View style={styles.containerFlex}>
        <TextInput
          underlineColorAndroid={'transparent'}
          placeholder="country name"
          value={searchName}
          style={styles.searchInput}
          onChange={e => handelChange(e)}
        />
        <Button
          onPress={() => {
            handelSearch();
          }}
          title="Search"
          color={'#48AAEC'}
        />
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'0000ff'} />
          <Text style={{textAlign: 'center'}}> Loading...</Text>
        </View>
      ) : (
        <>
          <Text style={{textAlign: 'center'}}> {searchResult.message}</Text>
          <Image
            source={require('./Resources/island.png')}
            style={styles.image}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },

  containerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },

  searchInput: {
    height: 40,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 5,
    fontSize: 18,
    width: 200,
    borderWidth: 1,
    borderColor: '#48AAEC',
    borderRadius: 8,
  },

  image: {
    width: 240,
    height: 140,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    marginHorizontal: 50,
  },
  loaderContainer: {
    marginTop: 20,
  },
});

export default SearchPage;
