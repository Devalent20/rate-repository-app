import { View, Text, StyleSheet } from 'react-native'


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
      <Text style={ styles.strong }>id: {props.id}</Text>
      <Text>Fullname: {props.fullname}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Created at: {props.createdAt}</Text>
      <Text>Rating Average: {props.ratingAverage}</Text>
      <Text>ForkCount: {props.forksCount}</Text>
      <Text>Owner: {props.owner}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default RepositoryItem