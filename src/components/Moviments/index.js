import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false)

 return (
    <TouchableOpacity onPress={ () => setShowValue(!showValue)} style={styles.container}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <MotiText 
            style={styles.label}
            from={{
                translateX: 100,
            }}
            animate={{
                translateX: 0,
            }}
            transition={{
                type: 'spring',
            }}
            >{data.label}</MotiText>
            {showValue ? (
                <AnimatePresence exitBeforeEnter>
                 <Text style={data.type === 1 ? styles.value : styles.expenses}>{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
                 </AnimatePresence>
            ) : (
                <AnimatePresence exitBeforeEnter>
                <MotiView 
                style={styles.skeleton}
                from={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type:'timing', duration:500,}}
                ></MotiView>
                </AnimatePresence>
            )}
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        fontWeight: 'bold',
        color: '#DADADA',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton: {
        backgroundColor: '#DADADA',
        marginTop: 6,
        width: 80,
        height: 10,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,

    }
})