import { COLORS } from "../../../constants";

export default {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    loginLabel: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 23,
        letterSpacing: 2,
        marginBottom: 20
    },
    inputView: {
        width: '100%',
        borderColor: COLORS.borderColor,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontFamily: 'Arial-Rounded',
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 18,
        color: COLORS.black,
        marginVertical: Platform.OS == 'android' ? 0 : 10
    },
    errorText: {
        marginBottom: 10,
        marginTop: 6,
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.errorMsgColor
    },
    button: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
        padding: 10,
        fontSize: 18,
        borderRadius: 30,
        textAlign: 'center',
        color: COLORS.white,
        marginVertical: 10,
        overflow: 'hidden'
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: "center",
        letterSpacing: 2
    }
}
