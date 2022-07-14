import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// import { useContext } from 'react';
// import NoteContext from '../../Context/NoteContext';

const Header = (props) => {

    // const {globalfont} = useContext(NoteContext);
    // const [Ifont, setIfont] = globalfont;

    const Ifont = 'Poplin';
    
    return (
        <View>
             <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{position:'absolute', top:8,  left:22,  }}>
                    <Icon name="left" size={20} color="#000" />
                    </TouchableOpacity>                        
                    <Text style={[{fontFamily: `${ Ifont }`}, styles.head]}>{props.title}</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontStyle: 'normal',
        
        // fontFamily:"RammettoOne-Regular",
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 36,

    },
})

export default Header;
