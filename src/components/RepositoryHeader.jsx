import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText.jsx';
import theme from '../theme.js';

const RepositoryItemHeader = ({ avatar, fullname, description, language }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
        <View style= {{ paddingRight: 10}}>
            <Image style={styles.image} source={{ uri: avatar }} />
        </View>
        <View style={{ flex: 1}}>
            <StyledText fontSize='subheading' fontWeight='bold' color='primary'>{fullname}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,        
        overflow: 'hidden'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 4
    }
})

export default RepositoryItemHeader