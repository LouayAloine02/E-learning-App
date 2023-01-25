import React from 'react'
import { View, StyleSheet, Image, StatusBar, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Video } from 'expo-av'
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'
import Chapters from '../screens/Chapters'


const { width, height } = Dimensions.get("window");


export default class VideoPage extends React.Component {

    // videoPlayer;
    state = {
        currentTime: 0,
        duration: 0,
        paused: false,
        isLoading: true


    }
    // onSeek = seek => {
    //     this.videoPlayer.seek(seek);

    // };
    // onPaused = playerState => {
    //     this.setState({
    //         paused: !this.state.paused,
    //         playerState,

    //     });
    // };

    onProgress = data => {
        const { isLoading, playerState } = this.state;
        console.log(data);
        if (!isLoading) {
            this.setState({ currentTime: data.currentTime });
        }

    };

    // onError = () => alert(error);


    // onSeeking = currentTime => this.setState({
    //     currentTime
    // })
    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor="#f58084" />
                <Video
                    source={require('../videos/NodejsStreams.mp4')}
                    rate={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls
                    style={style.video}
                    positionMillis={3000}


                    onProgress={this.onProgress}
                    // paused={this.state.paused}
                    ref={(ref) => { this.player = ref }}
                />
                {/* <MediaControls
                    duration={this.state.duration}
                    isLoading={this.setState.isLoading}
                    onPaused={this.onPaused}
                    onSeek={this.onSeek}
                    onSeeking={this.onSeeking}
                    playerState={this.state.playerState}
                    progress={this.state.currentTime}
                >

                </MediaControls> */}
                <Chapters
                    color="#fde6e6"
                    percent={0}
                    duration="13 minutes"
                    title="Introduction"
                    num={1}
                />


                <TouchableOpacity onPress={() => this.props.navigation.navigate("Python")}>
                    <View style={{
                        flexDirection: "row",
                        paddingVertical: 5,
                        backgroundColor: "#f58084",
                        marginHorizontal: 40,
                        paddingVertical: 15,
                        alignItems: "center",
                        borderRadius: 10,
                        justifyContent: "center",
                        marginTop: 20



                    }}


                    >

                        <Image
                            source={require('../images/a1.png')}
                            style={{ height: 15, width: 20 }}
                        />
                        <Text>  </Text>

                        <Text style={{
                            color: "#FFF",
                            fontFamily: "Bold",
                            fontSize: 15,
                            marginRight: 50
                        }}>
                            Go back
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}
const style = StyleSheet.create({
    video: {
        width: width,
        height: height / 3
    },
    container: {
        backgroundColor: "#fff",
        justifyContent: "center"
    }
})