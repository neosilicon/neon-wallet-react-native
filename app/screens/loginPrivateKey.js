import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Button from '../components/Button'

// redux
import { bindActionCreatorsExt } from '../utils/bindActionCreatorsExt'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'

class LoginPrivateKey extends React.Component {
    _walletLogin() {
        let privateKey = this.txtPrivateKey._lastNativeText
        this.props.wallet.loginWithPrivateKey(privateKey)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <TextInput
                        ref={txtInput => {
                            this.txtPrivateKey = txtInput
                        }}
                        multiline={false}
                        placeholder="Enter your private key (WIF) here"
                        placeholderTextColor="#636363"
                        returnKeyType="done"
                        style={styles.inputBox}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <Button title="Login" onPress={this._walletLogin.bind(this)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputBox: {
        marginHorizontal: 20,
        marginVertical: 5,
        paddingLeft: 10,
        height: 30,
        fontSize: 14,
        backgroundColor: '#E8F4E5',
        color: '#333333'
    },
    loginForm: {
        marginTop: 5
    }
})

function mapStateToProps(state, ownProps) {
    return {}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreatorsExt(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPrivateKey)