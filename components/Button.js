import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { default as ReactButton } from 'react-native-button';

const ButtonElement = styled(ReactButton).attrs(({ theme, variant = 'primary', color = 'primary', containerStyle }) => ({
    containerStyle: {
        backgroundColor: color ? theme.colors[color] : theme.colors.primary,
        borderColor: variant === 'outline' ? theme.colors.primary : 'transparent',
        ...theme.buttons[variant],
        ...containerStyle
    },
}))`
    ${({theme}) => theme.typography.button};
    color: ${({theme}) => theme.colors.base};
`;

export const Button = forwardRef((props, ref) => {
    return (
        <ButtonElement ref={ref} {...props}>
            {props.children}
        </ButtonElement>
    );
});

Button.propTypes = {
    variant: PropTypes.oneOf(['full', 'block', 'outline', 'text', 'pill']),
    color: PropTypes.oneOf(['secondary', 'primary']),
    swipeable: PropTypes.bool,
};