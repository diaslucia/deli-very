import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

/* Styles */
import styles from "./styles";

/* Validator */
import validator from "../../../utils/validator";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            value: '',
            defaultValue: '',
            validate: false,
        }
    }

    onRef = (ref) => {
        this.input = ref;
        this.props.textInputRef && this.props.textInputRef(ref);
    }

    onBlurInput = () => {
        this.props.onBlurInput && this.props.onBlurInput();
    }

    onFocusInput = () => {
        this.props.onFocusInput && this.props.onFocusInput();
    }

    onChangeInput = (value) => {
        const { type } = this.props;

        if(type) {
            if(value.trim() !== '') {
                if(validator(type, value).error !== '') {
                    this.setState({
                        error: validator(type, value).error,
                        value,
                        validate: false,
                    });
                } else {
                    this.setState({
                        error: '',
                        value,
                        validate: true,
                    });
                }
            } else {
                this.setState({
                    error: '',
                    value,
                    validate: false,
                });
            }
        }
        this.props.onChangeInput && this.props.onChangeInput(value);
    }

    render() {
        const { editable = true, ...props } = this.props;
        return (
            <View
                pointerEvents={editable ? 'auto' : 'none'}
            >
                <TextInput
                    {...props}
                    ref={this.onRef}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                    onBlur={this.onBlurInput}
                    onFocus={this.onFocusInput}
                    editable={editable}
                    />
                
                {this.state.error !== '' ? <Text style={styles.messageText}>{this.state.error}</Text> : null}
            </View>
        )
    }
}