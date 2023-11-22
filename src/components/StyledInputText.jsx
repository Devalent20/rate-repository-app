import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.black,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    }
})

const StyledInputText = ({ style = {}, ...props}) => {
    const inputStyle = {
        ... styles.textInput,
        ... style
    }

    return <TextInput style={inputStyle} {...props} />
}

export default StyledInputText