import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';
import RepositoryItemHeader from './RepositoryHeader.jsx';
import theme from '../theme.js';


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
})

export default RepositoryItem