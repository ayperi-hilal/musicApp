import React from "react"
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'



const SongCard = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
                <View style={styles.innercontainer}  >
                    <Text style={styles.title}>{props.song.title}</Text>

                    <View style={styles.content}>
                        <View style={styles.info_container} >
                            <Text>{props.song.artist}</Text>
                            <Text style={styles.years}>{props.song.year}</Text>
                        </View>

                       
                       {props.song.isSoldOut===true ?( <View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>TÜKENDİ </Text>
                        </View>
                        ): null
                     }



                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        padding: 10,
        flexDirection: 'row'

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50


    },
    innercontainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffc86d',
        justifyContent: 'center'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    info_container: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignContent:'center',

    },
    years: {

        marginLeft: 10,
        color: 'gray ',
        fontWeight: 'bold',
        fontSize: 12,
    },
    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,

    },
    soldout_title: {
        color: 'red',
        fontSize:12,
    },
    content: {
        flexDirection: "row"
    }


});

export default SongCard;