import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,
  FlatList,
  SafeAreaView
} from 'react-native';
import React,{useState} from 'react';
import music_data from './src/music-data.json';
import SongCard from './src/components/SongCard/Songcard';
import SearchBar from './src/components/SearchBar/SearchBar';

export default function App() {

  const [list,setList]=useState(music_data);

  const renderSong=({ item }) => <SongCard song={item}/>;
  const remderSeperatr=()=><View style={styles.seperator}></View>

  const handleSearch=text=>{
    const filterList=music_data.filter(song=>{
      const sercedText=text.toLowerCase();
      const currentTitle=song.title.toLowerCase();

      return currentTitle.indexOf(sercedText)>-1;
    });
    setList(filterList);
  };

  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearch} />
      <View>
        <FlatList
        keyExtractor={item=>item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={remderSeperatr}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  seperator: {
      borderWidth:1,
      borderColor:'#e0e0e0'

  },
})
