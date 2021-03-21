import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as Haptics from 'expo-haptics';
import { PropTypes } from 'prop-types';

const AlertBox = styled(AwesomeAlert).attrs(({ theme }) => ({
    confirmButtonColor: theme.colors.base,
    cancelButtonColor: theme.colors.base,
    confirmButtonStyle: {
        width: '100%',
        borderRadius: 0,
        paddingTop: theme.spacing.bumper,
        paddingBottom: theme.spacing.bumper,
        margin: 0,
        alignSelf: 'center',
    },
    cancelButtonStyle: {
        borderRightWidth: 1,
        margin: 0,
        borderRadius: 0,
        borderColor: theme.colors.baseSecondary,
        paddingTop: theme.spacing.bumper,
        paddingBottom: theme.spacing.bumper,
        alignSelf: 'center',
        width: '100%',
    },
    confirmButtonTextStyle: {
        fontFamily: 'optician-sans',
        fontSize: 18,
        margin: 0,
        marginLeft: '15%',
        color: theme.colors.baseContrast,
        textAlign: 'center',
    },
    cancelButtonTextStyle: {
        fontFamily: 'optician-sans',
        fontSize: 18,
        marginRight: '15%',
        color: theme.colors.primary,
        textAlign: 'center',
    },
    contentContainerStyle: {
        backgroundColor: theme.colors.base,
        padding: 0,
        width: '100%',
    },
    contentStyle: {
        paddingTop: theme.spacing.bumper,
        paddingLeft: theme.spacing.bumper,
        paddingRight: theme.spacing.bumper,
        width: '100%',
    },
    actionContainerStyle: {
        borderTopWidth: 1,
        borderColor: theme.colors.baseSecondary,
        paddingLeft: theme.spacing.s,
        paddingRight: theme.spacing.s,
        width: '100%',
    },
    titleStyle: {
        fontFamily: 'proxima-semibold',
        fontSize: 20,
        color: theme.colors.baseContrast,
        textAlign: 'center',
    },
    messageStyle: {
        fontFamily: 'proxima-semibold',
        fontSize: 16,
        color: theme.colors.baseTertiary,
        textAlign: 'center',
        lineHeight: 22,
    },
}))``;

export const Alert = ({ active = false, onCancel, onConfirm, ...props }) => {
    useEffect(() => {
        if (active) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
    }, [active]);

    return (
        <AlertBox
            show={active}
            showProgress={false}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={typeof onCancel === 'function'}
            showConfirmButton={typeof onConfirm === 'function'}
            onCancelPressed={() => (onCancel ? onCancel(false) : null)}
            onConfirmPressed={() => (onConfirm ? onConfirm(true) : null)}
            {...props}
        />
    );
};

Alert.propTypes = {
    active: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
};
