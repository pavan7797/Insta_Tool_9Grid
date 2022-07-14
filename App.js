
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Upload from './Upload';
import Header from './Header';
import NoCropBox from './NoCropBox';

const Stack = createNativeStackNavigator()

export default function App() {
  // const newLocal = "A";
  return (
    <>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }}  Header={false} name="Upload" component={Upload} />
        <Stack.Screen options={{ headerShown: false }}  name="NoCropBox" component={NoCropBox} />

          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </>
    
  );
}


// import React, { Component } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import {NavigationContainer} from '@react-navigation/native-stack'
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';

// import Upload from './Upload'; 

// // import Nocropbox from './NoCropBox';

// // const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     // <PaperProvider>
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //             <Stack.Screen options={{ headerShown: false }} name="Upload" component={Upload} />
//     //             {/* <Stack.Screen options={{ headerShown: false }} name="Nocropbox" component={Nocropbox} /> */}
//     //           </Stack.Navigator>

//     // </NavigationContainer>
//     // </PaperProvider>

//     <View><Upload/></View>
//   );
// }
