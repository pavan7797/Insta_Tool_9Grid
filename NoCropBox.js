// import React, { Component, useState } from 'react';
// import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image, AppRegistry } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Header from './Header';


// import Icontwo from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// // import { RadialGradient } from 'react-native-svg'

// function Nocropbox({ props, route, navigation }) {
//     let items = route;
//     // console.log(items.img)
//     const Ifont = 'Poplin';
//     const defaultimg = require('./Pic/blackline.png');
//     const blackline = require('./Pic/blackline.png');
//     const blackcircle = require('./Pic/blackline.png');

//     // const [] = useState({uri: `data:${items.img.mime};base64,${items.img.data}`});
//     // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
//     // console.log("props value are = ", Mypic)
//     function printvalue() {
//         // console.log("props value are = ", Mypic)
//         // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
//     }


//     const [Slidervalue, setSlidervalue] = useState(100);

//     return (
//         <View style={{ backgroundColor: '#EFE7FC', height: Dimensions.get('window').height }}>

//             <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
//                 <View style={styles.card}>
//                     <Header navigation={navigation} title="9 Grid" />
//                 </View>
//             </LinearGradient>

//             <View style={{ backgroundColor: 'red', width: '100%', height: '55%', marginTop: '15%' }}>
//                 <Image source={""} style={{ height: "100%", width: "100%" }} />
//             </View>



//             {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//                 <Text style={{ fontSize: 11, fontWeight: '500', color: '#000' }}>{parseInt(Slidervalue)}%</Text>
//             </View> */}

//   {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 45 }}>
//                 <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         style={{ tintColor: '#000', height: 22, width: 22 }}
//                         source={require('./Pic/letterbox.png')} />
//                     <Text style={{ color: '#000', marginTop: 7, fontSize: 9, fontWeight: '500' }}>Letterbox</Text>
//                 </View>

//                 <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         style={{ tintColor: '#877D88', height: 22, width: 22 }}
//                         source={require('./Pic/blur.png')} />
//                     <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Blur</Text>
//                 </View>

//                 <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         style={{ tintColor: '#877D88', height: 22, width: 22 }}
//                         source={require('./Pic/background.png')} />
//                     <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Background</Text>
//                 </View>

//                 <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         style={{ tintColor: '#877D88', height: 22, width: 22 }}
//                         source={require('./Pic/crop.png')} />
//                     <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Crop</Text> */}
//                 {/* </View>  */}


//             <View style={{ position: 'absolute', bottom: 25, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

//                 <TouchableOpacity onPress={() => { navigation.navigate("Creativefonts"); } } style={{ alignItems: 'center', borderRadius: 15, backgroundColor: '#3672E9', width: '70%', height: 59, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={{ fontFamily: `${Ifont}`, color: '#fff', fontSize: 18, fontWeight: '500' }}>Crop it</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     );
// }

// var styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginLeft: 10,
//         marginRight: 10,
//         alignItems: 'stretch',
//         justifyContent: 'center',
//     },
// });

// export default Nocropbox;




import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground, Image, AppRegistry } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';


// import Icontwo from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import { RadialGradient } from 'react-native-svg';


// import Slider from '@react-native-community/slider';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';


const Nocropbox= ({ props, route, navigation }) => {
    let items = route.params
    // console.log(items.img)

    const Ifont = 'Poplin';
    // const defaultimg = require('./Pic/standman.png')
    const blackline = require('./Pic/blackline.png')
    const blackcircle = require('./Pic/blackcircle.png')

    const [Mypic, setMypic] = useState({uri: `data:${items.img.mime};base64,${items.img.data}`});
    // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
    // console.log("props value are = ", Mypic)

    const printvalue = () => {
        // console.log("props value are = ", Mypic)
        // setMypic({uri: `data:${items.img.mime};base64,${items.img.data}`})
    }


    // const [Slidervalue, setSlidervalue] = useState(100);

    return (
        <View style={{ backgroundColor: '#EFE7FC', height: Dimensions.get('window').height }}>

            <LinearGradient colors={['#ffffff', '#ECDCF7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View style={styles.card}>
                    <Header navigation={navigation} title="9 Grid" />
                </View>
            </LinearGradient>

            <View style={{ backgroundColor: 'red', width: '100%', height: '55%', marginTop: '15%' }}>
                <Image source={Mypic} style={{ height: "100%", width: "100%" }} />
            </View>

            

            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Slider
                    style={{ width: '65%', height: 40, marginLeft: 45 }}
                    minimumValue={100}
                    maximumValue={0}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="black"
                    // maximumTrackImage={blackline}
                    // minimumTrackImage={blackline}
                    onValueChange={(value) => { setSlidervalue(value) }}
                    trackImage={blackline}
                    thumbImage={blackcircle}
                    inverted={true}
                />
                <Text style={{fontSize:11, fontWeight:'500', color:'#000'}}>{parseInt(Slidervalue)}%</Text>
            </View> */}

            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 45 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ tintColor: '#000', height: 22, width: 22 }}
                        source={require('./Pic/letterbox.png')}
                    />
                    <Text style={{ color: '#000', marginTop: 7, fontSize: 9, fontWeight: '500' }}>Letterbox</Text>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ tintColor: '#877D88', height: 22, width: 22 }}
                        source={require('./Pic/blur.png')}
                    />
                    <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Blur</Text>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ tintColor: '#877D88', height: 22, width: 22 }}
                        source={require('./Pic/background.png')}
                    />
                    <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Background</Text>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ tintColor: '#877D88', height: 22, width: 22 }}
                        source={require('./Pic/crop.png')}
                    />
                    <Text style={{ marginTop: 7, fontSize: 9, fontWeight: '500' }}>Crop</Text>
                </View>

            </View>
 */}


            <View style={{ position: 'absolute', bottom: 25, width: '100%', flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => { navigation.navigate("Creativefonts") }} style={{ alignItems: 'center', borderRadius: 15, backgroundColor: '#3672E9', width: '70%', height: 59, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: `${Ifont}`, color: '#FFF', fontSize: 18, fontWeight: '500' }}>Crop It</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});

export default Nocropbox;




