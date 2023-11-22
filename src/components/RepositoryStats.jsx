import { View } from 'react-native'
import StyledText from './StyledText.jsx';

const parseThousands = value => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText fontWeight='bold'>Stars</StyledText>
                <StyledText align= 'center'>{parseThousands(props.stars)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Rating</StyledText>
                <StyledText align= 'center'>{parseThousands(props.ratingAverage)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold'>Forks</StyledText>
                <StyledText align= 'center'>{parseThousands(props.forksCount)}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats