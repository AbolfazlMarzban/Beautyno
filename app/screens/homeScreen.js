import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import StarRating from 'react-native-star-rating';


function homeScreen(props) {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       starCount: 3.5
    //     };
    //   }
     
    //   onStarRatingPress(rating) {
    //     this.setState({
    //       starCount: rating
    //     });
    //   }
    return (
        <View style={styles.screen}>
            {/* <Text style={styles.text}>صفحه ی اصلی</Text> */}
            <View style={styles.picBox}>
                <View style={styles.profile}>
                    <Image source={require('../assets/salon-logo.png')} resizeMode='contain' style={styles.profilePic}></Image>
                </View>
                <View >
                <Text style={styles.profileText}>اسم آرایشگاه</Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={3}
                  fullStarColor={colors.yellow}
                  starSize={15}
                  starStyle={{ paddingRight: 10}}
                />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'black',
        height:'100%',
        padding: 20
    },
    text:{
        color: 'white',
            fontFamily: 'YekanBakh-Regular'

    },
    picBox:{
        alignItems: 'flex-end',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    profile:{
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        shadowColor: colors.blue,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowColor: colors.blue,
        elevation: 15,
        backgroundColor: colors.blue
    },
    profilePic:{
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: colors.blue,

    },
    profileText:{
        fontSize: 22,
        color: colors.white,
        fontFamily: 'YekanBakh-Regular',
        paddingRight: 10
    }
})
export default homeScreen;