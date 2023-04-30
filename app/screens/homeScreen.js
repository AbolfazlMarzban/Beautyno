import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors';
import StarRating from 'react-native-star-rating';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"



function HomeScreen(props) {
    
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
        <ScrollView style={styles.screen}>
            <View>
                    <View style={styles.picBox}>
                        <View style={styles.profile}>
                            <Image source={require('../assets/background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                        </View>
                        <View >
                            <Text style={styles.profileText}>Salon name</Text>
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
                    <Image source={require('../assets/modern-beauty-salon-interior.jpg')} 
                     style={{  width: '100%', height: 360, resizeMode: 'contain', borderRadius: 20 , marginTop: 20}}></Image>
                     <View style={{display: 'flex', flexDirection:'row', marginTop: 10}}>
                        <TouchableOpacity>
                        <Icon name={'heart-outline'} size={35} color={colors.pink}  style={{ textShadowOffset:{width:1, height:1},
                        textShadowColor: colors.purple,
                        shadowOpacity: 2,
                        elevation: 10,
                        textShadowRadius: 10,
                        marginRight: 5}} />
                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name={'comment-outline'} size={35} color={colors.blue}  style={{ textShadowOffset:{width:1, height:1},
                        textShadowColor: colors.blue,
                        shadowOpacity: 2,
                        elevation: 10,
                        textShadowRadius: 10}} />
                        </TouchableOpacity>
                     </View>
                     <ScrollView style={{ width: '100%', marginTop: 10, height: 100 }}>
                        <Text style={styles.commentUser}>user : </Text>
                        <Text style={styles.comment}>user comment</Text>
                     </ScrollView>
            </View>
            <View>
                    <View style={styles.picBox}>
                        <View style={styles.profile}>
                            <Image source={require('../assets/background.png')} resizeMode='contain' style={styles.profilePic}></Image>
                        </View>
                        <View >
                            <Text style={styles.profileText}>salon name</Text>
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
                    <Image source={require('../assets/modern-beauty-salon-interior.jpg')} 
                     style={{  width: '100%', height: 360, resizeMode: 'contain', borderRadius: 20 , marginTop: 20}}></Image>
                     <View style={{display: 'flex', flexDirection:'row', marginTop: 10}}>
                        <TouchableOpacity>
                        <Icon name={'heart-outline'} size={35} color={colors.pink}  style={{ textShadowOffset:{width:1, height:1},
                        textShadowColor: colors.purple,
                        shadowOpacity: 2,
                        elevation: 10,
                        textShadowRadius: 10,
                        marginRight: 5}} />
                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name={'comment-outline'} size={35} color={colors.blue}  style={{ textShadowOffset:{width:1, height:1},
                        textShadowColor: colors.blue,
                        shadowOpacity: 2,
                        elevation: 10,
                        textShadowRadius: 10}} />
                        </TouchableOpacity>
                     </View>
                     <ScrollView style={{ width: '100%', marginTop: 10, height: 100 }}>
                     <Text style={styles.commentUser}>user : </Text>
                        <Text style={styles.comment}>user comment</Text>
                     </ScrollView>
            </View>
        </ScrollView>
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
        borderRadius: 80,
        shadowColor: colors.blue,
        shadowOffset: {width: 5, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 75,
        shadowColor: colors.purple,
        elevation: 15,
        backgroundColor: colors.purple
    },
    profilePic:{
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.yellow,

    },
    profileText:{
        fontSize: 22,
        color: colors.white,
        fontFamily: 'YekanBakh-Regular',
        paddingRight: 10
    },
    commentUser: {
        color: colors.white,
        fontFamily: 'YekanBakh-Regular',
        fontWeight: '600',
        fontSize: 20,
    },
    comment: {
        color: colors.white,
        fontFamily: 'YekanBakh-Regular',
        fontWeight: '400',
        fontSize: 15,
    }
})
export default HomeScreen;