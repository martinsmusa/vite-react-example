import { FC, useCallback } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useActions } from '../../hooks/useActions.ts';
import { alertSelector } from '../../store/alert/alert.selector.ts';
import { OverlayBg } from '../../style/global.ts';
import { ModalContainer,  ModalHeader } from './style.ts';

const AlertNotification: FC = () => {
    const alert = useAppSelector(alertSelector);
    const { clearAlert } = useActions();

    const handleModalClose = useCallback(() => {
        clearAlert();
    }, [clearAlert]);

    if (!alert.id) {
        return null;
    }

    return (
        <OverlayBg>
            <ModalContainer>
                <ModalHeader>
                    <h3>
                        { alert.title }
                    </h3>
                    <button onClick={ handleModalClose }>close</button>
                </ModalHeader>
                <div>
                    <p>{ alert.message }</p>
                </div>
            </ModalContainer>
        </OverlayBg>
    );
};

export default AlertNotification;
