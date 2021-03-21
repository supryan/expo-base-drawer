import React from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { Image } from 'react-native'
import { Assets } from '../constants/Assets';
import { observer } from 'mobx-react';
import { useStores } from '../utils/hooks';

const TitleScreenView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const TitleScreenButton = styled(Button).attrs(({ theme }) => ({
    containerStyle: {
        marginTop: theme.spacing.s
    }
}))``

const TitleScreenImage = styled(Image)`
    width: 50%;
    height: 50%;
`

export const TitleScreen = observer(({ navigation }) => {
    const { app: { setOnboarding } } = useStores()

    return (
        <TitleScreenView>
            <TitleScreenImage source={Assets.icons.logo} resizeMode="contain" />
            <TitleScreenButton onPress={() => setOnboarding(true)}>Dashboard</TitleScreenButton>
        </TitleScreenView>
    );
})