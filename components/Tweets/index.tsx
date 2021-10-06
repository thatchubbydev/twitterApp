import React from 'react'
import {View} from 'react-native'
import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'
import styles from './styles'

import {TweetType} from '../../types'

export type TweetProps = {
    tweet:TweetType

}

const Tweets = ({tweet}:TweetProps) => (
    <View style={styles.container}>
        <LeftContainer user = {tweet.user}/>
        <MainContainer tweet={tweet}/>

    </View>
)

export default Tweets;