import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return (
        <View>
            <View style={styles.headerBox}>
                <LinearGradient
                    colors={['#3603FF', '#FB5CD8', '#FAFF00']}
                    locations={[0, 0.25, 0.6]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientCircle}
                />
                <View style={styles.tipsBox}>
                    <Image source={require('../assets/icons/lightbulb.png')} style={styles.icon} />
                    <Text style={styles.tipsText}>Tips</Text>
                </View>
            </View>

            <View style={styles.creditCardsBox}>
                <Text style={styles.title}>All your credit cards</Text>
                <Text style={styles.subtitle}>Find your credit cards here</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
    },
    gradientCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    tipsBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 100,
        height: 50,
        backgroundColor: '#252525',
        borderRadius: 4,
    },
    icon: {
        width: 25,
        height: 25,
    },
    tipsText: {
        fontSize: 17,
        color: '#fff',
    },
    creditCardsBox: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        marginTop: 15,
    },
});
