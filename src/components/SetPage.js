import React from 'react'
import { Picker, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button } from './Button'
import { FadeInView } from './FadeInView'
import { styles } from '../styles'
import { repeatOptions } from '../modules/repeat'

export { SetPage }

const SetPage = props => (
    <FadeInView style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
            <TextInput
                style={{ ...styles.label, ...styles.textInput }}
                onChangeText={props.titleChange}
                placeholder='Write your title (required)'
                placeholderTextColor='hsl(270, 80%, 80%)'
                value={props.memo.title}
                maxLength={40}
            />
            <TextInput
                style={{ ...styles.label, ...styles.textInput}}
                onChangeText={props.textChange}
                placeholder='Write your text (optional)'
                placeholderTextColor='hsl(270, 80%, 80%)'
                value={props.memo.text}
                maxLength={240}
                multiline={true}
                numberOfLines={3}
            />
            {/*<TouchableOpacity style={styles.touch} onPress={props.repeatFunct}>
            <Text style={styles.label}>Repeat: </Text>
            <Text style={{ ...styles.bold, ...styles.label }}>{props.memo.repeat.key}</Text>
</TouchableOpacity>*/}

            <View style={styles.picker}>
                <Text style={styles.label}>Repeat</Text>
                <View style={styles.pickerOption}>
                    <Picker
                        style={{ ...styles.label, width: 180 }}
                        selectedValue={props.memo.repeat.value}
                        onValueChange={props.repeatFunc}
                    >
                        {repeatOptions.map(x => <Picker.Item label={x.key} value={x.value} />)}
                    </Picker>
                </View>
            </View>
            {props.memo.repeat.value === 'time' && <View style={styles.picker}>
                <Text style={styles.label}>Every</Text>
                <View style={styles.pickerOption}>
                    <TextInput
                        style={{ ...styles.bold, ...styles.label, ...styles.timeInput }}
                        onChangeText={props.repeatTimeFunc}
                        value={props.memo.repeatTime.toString()}
                        keyboardType='numeric'
                    />
                    <Text style={styles.label}>{props.memo.repeatTime == 1 ? 'hour' : 'hours'}</Text>
                </View>
            </View>}

            {/*props.memo.repeat.value == 'time' && <RepeatTile 
                repeatTime={props.memo.repeatTime}
                repeatTimeFunc={props.repeatTimeFunc}
                decreaseRepeat={props.decreaseRepeat}
                increaseRepeat={props.increaseRepeat}
/>*/}

            <Button
                textStyle={{ ...styles.bold, ...styles.label }}
                touchStyle={styles.touch}
                func={props.dateFunc}
                text={props.memo.date}
            />
            <Button
                textStyle={{ ...styles.bold, ...styles.label }}
                touchStyle={styles.touch}
                func={props.timeFunc}
                text={props.memo.time}
            />
        </ScrollView>
        <View style={styles.group}>
            <Button
                textStyle={{ ...styles.bold, ...styles.label }}
                touchStyle={{ ...styles.touch, ...styles.touchAction }}
                func={props.submitHandler}
                text='Set Memo'
            />
            <Button
                textStyle={{ ...styles.bold, ...styles.label }}
                touchStyle={{ ...styles.touch, ...styles.touchDanger }}
                func={props.reset}
                text='Reset Fields'
            />
            <Button
                textStyle={{ ...styles.bold, ...styles.label }}
                touchStyle={styles.touch}
                func={props.cancel}
                text='Go Back'
            />
        </View>
    </FadeInView>
)

const RepeatTile = props => (
    <View style={styles.touchRow}>
        <SignButton style={styles.touchLeft} text='-' func={props.decreaseRepeat} />
        <Text style={styles.label}>Every </Text>
        <TextInput
            style={{ ...styles.bold, ...styles.label, ...styles.timeInput }}
            onChangeText={props.repeatTimeFunc}
            value={props.repeatTime.toString()}
            keyboardType='numeric'
        />
        <Text style={styles.label}> hours</Text>
        <SignButton style={styles.touchRight} text='+' func={props.increaseRepeat} />
    </View>
)

const SignButton = props => (
    <TouchableOpacity style={{ ...styles.touch, ...props.style}} onPress={props.func}>
      <Text style={{ ...styles.bold, ...styles.label }}>{props.text}</Text>
    </TouchableOpacity>
)
