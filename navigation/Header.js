import React from 'react';
import styled from 'styled-components/native';
import Button from 'react-native-button';

const HeaderContainer = styled.View`
    flex: 1;
    align-items: center;
    position: relative;
    z-index: 1;
`;

const HeaderLogoButton = styled(Button).attrs(() => ({
    containerStyle: {
        width: 45,
        height: 45,
        marginTop: -5
    }
}))`
    overflow: visible;
`;

export const Header = ({ navigation }) => {
    const handleHeaderPress = () => {};

    return (
        <HeaderContainer>
            <HeaderLogoButton onPress={handleHeaderPress}>Logo</HeaderLogoButton>
        </HeaderContainer>
    );
};
