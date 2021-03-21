import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { useStores } from '../utils/hooks';

const DashboardScreenView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

const DashboardScreenButton = styled(Button).attrs(({ theme }) => ({
    containerStyle: {
        marginBottom: theme.spacing.m,
    },
}))``;

export const DashboardScreen = observer(({ navigation }) => {
    const {
        notification: { showLoader, showSnackbar, showAlert },
    } = useStores();

    return (
        <DashboardScreenView>
            <DashboardScreenButton onPress={() => showLoader()}>Show Loader (10s)</DashboardScreenButton>
            <DashboardScreenButton onPress={() => showSnackbar({ message: 'This is a cool snackbar.' })}>Show Snackbar</DashboardScreenButton>
            <DashboardScreenButton onPress={() => showAlert({ title: 'Alert', message: 'This is a really cool alert.' })}>Show Alert</DashboardScreenButton>
        </DashboardScreenView>
    );
})