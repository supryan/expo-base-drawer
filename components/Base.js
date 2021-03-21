import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components/native';
import { useStores } from '../utils/hooks';
import { Loader } from './notifications/Loader';
import { Snackbar } from './notifications/Snackbar';
import { Alert } from './notifications/Alert';

const BaseView = styled.View`
    position: absolute;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Base = observer(() => {
    const {
        app: { init },
        notification: { getLoader, getSnackbars, hideSnackbar, getAlert, hideAlert },
    } = useStores();

    const handleAlert = (event, func) => {
        hideAlert();
        return func ? func(event) : null;
    }

    // Check initial app data
    useEffect(() => {
        init();
    }, [])

    return (
        <BaseView pointerEvents="box-none">
            <Loader loading={getLoader?.active} overlay={getLoader?.overlay} />
            {getSnackbars?.map((snack, index) => (
                <Snackbar key={`snack-${index}`} {...snack} onSnackBarHide={() => hideSnackbar(snack.id)} />
            ))}
            <Alert {...getAlert} onConfirm={(event) => handleAlert(event, getAlert.onConfirm)} onCancel={(event) => handleAlert(event, getAlert.onCancel)} />
        </BaseView>
    );
});