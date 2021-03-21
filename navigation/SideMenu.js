import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';
import { useStores } from '../utils/hooks';
import { APP_ROUTES } from '../constants/Routes';
import Button from 'react-native-button'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SideMenuView = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    z-index: 99999;
`;

const SideMenuSectionList = styled.SectionList`
    background-color: ${({ theme }) => theme.colors.secondary};
    flex: 1;
`;

const SideMenuFixedArea = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: flex-start;
    justify-content: center;
    height: 50px;
    width: 100%;
`;

const SideMenuItemView = styled.View`
    flex: 1;
`;

const SideMenuViewButton = styled(Button).attrs(({ theme }) => ({
    containerStyle: {
        backgroundColor: theme.colors.secondary,
        flexDirection: 'row',
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.s,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 2,
        width: '100%',
    },
}))`
    flex: 1;
`;

const SideMenuItemText = styled.Text`
    ${({ theme }) => theme.typography.header};
    color: ${({ theme }) => theme.colors.secondaryContrast};
    margin-left: 10px;
    text-align: left;
`;

const SideMenu = observer(({ navigation }) => {
    // Side Menu Item Component
    const SideMenuItem = ({ name, route }) => {
        return (
            <SideMenuItemView>
                <SideMenuViewButton onPress={() => navigation.navigate(route)}>
                    <SideMenuItemText>{name}</SideMenuItemText>
                </SideMenuViewButton>
            </SideMenuItemView>
        );
    };

    return (
        <SideMenuView>
            <SideMenuFixedArea></SideMenuFixedArea>
            <SideMenuSectionList
                sections={[{ data: APP_ROUTES }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <SideMenuItem {...item} />}
            />
            <SideMenuFixedArea>
                <SideMenuViewButton>
                    <MaterialCommunityIcons name="logout-variant" size={30} color="white" />
                    <SideMenuItemText>Log Out</SideMenuItemText>
                </SideMenuViewButton>
            </SideMenuFixedArea>
        </SideMenuView>
    );
});

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
