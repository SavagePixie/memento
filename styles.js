import { StyleSheet } from 'react-native'

const colours = {
    activeButton: 'hsl(270, 70%, 60%)',
    darkMain: 'hsl(270, 44%, 7%)',
    darkDetail: 'hsl(270, 35%, 12%)',
    lightDetail: 'hsl(30, 75%, 60%)',
    lightEmphasis: 'hsl(24, 65%, 99%)',
    lightMain: 'hsl(320, 15%, 90%)',
}

export const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 310,
    },
    group: {
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    item: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colours.darkDetail,
        padding: 20,
        margin: 4,
    },
    itemDesc: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    itemLabel: {
        flexDirection: 'row',
        maxWidth: 240,
    },
    label: {
        color: colours.lightMain,
        fontSize: 18,
    },
    main: {
        backgroundColor: colours.darkMain,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4,
    },
    message: {
        color: colours.darkDetail,
        fontSize: 15,
    },
    msgBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colours.lightDetail,
        borderRadius: 20,
        margin: 4,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 15,
        width: '100%',
    },
    textInput: {
        alignSelf: 'stretch',
        backgroundColor: colours.darkDetail,
        borderRadius: 20,
        margin: 4,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },
    timeInput: {
        backgroundColor: colours.darkDetail,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },
    touch: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colours.darkDetail,
        borderRadius: 30,
        margin: 4,
        padding: 15,
    },
    touchAction: {
        backgroundColor: colours.activeButton,
    },
    touchDanger: {
        backgroundColor: colours.lightDetail,
    },
    touchMenu: {
        padding: 5,
        width: 140,
    },
    touchMenuActive: {
        backgroundColor: colours.activeButton,
        padding: 5,
        width: 140,
    },
    touchMinus: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    touchPlus: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    touchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 4,
    },
})

/*
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colours.darkDetail,
        padding: 20,
        margin: 4,
        width: 310,
    },
    itemLabel: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        maxWidth: 240,
    },
    main: {
        backgroundColor: colours.darkMain,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 4,
        marginBottom: 10,
        width: 310,
    },
    message: {
        color: colours.darkDetail,
        fontSize: 15,
        fontWeight: 'bold',
    },
    msgBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colours.lightDetail,
        borderRadius: 20,
        margin: 4,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 15,
        width: '100%',
    },
    label: {
        color: colours.lightMain,
        fontSize: 18,
    },
    labelBold: {
        color: colours.lightMain,
        fontSize: 18,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 4,
        width: 310,
    },
    textInput: {
        backgroundColor: colours.darkDetail,
        borderRadius: 20,
        color: colours.lightMain,
        fontSize: 18,
        margin: 4,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        width: 310,
    },
    timeInput: {
        backgroundColor: colours.darkDetail,
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {
        alignSelf: 'flex-start',
        color: colours.lightEmphasis,
        fontSize: 25,
        fontWeight: 'bold',
    },
    touchable: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colours.darkDetail,
        borderRadius: 30,
        margin: 4,
        padding: 15,
        width: 310,
    },
    touchableActive: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colours.activeButton,
        borderRadius: 30,
        margin: 8,
        padding: 15,
        width: 310,
    },
    touchDanger: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colours.lightDetail,
        borderRadius: 30,
        margin: 8,
        padding: 15,
        width: 310,
    },
    touchMenu: {
        alignItems: 'center',
        backgroundColor: colours.darkDetail,
        borderRadius: 30,
        padding: 5,
        width: 140,
    },
    touchMenuActive: {
        alignItems: 'center',
        backgroundColor: colours.activeButton,
        borderRadius: 30,
        padding: 5,
        width: 140,
    },
    touchButton: {
        backgroundColor: colours.darkDetail,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    touchMinus: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    touchPlus: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
})
*/