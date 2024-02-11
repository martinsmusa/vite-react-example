import {FC, useCallback} from "react";
import {useAppSelector} from "../hooks/useAppSelector.ts";
import {useActions} from "../hooks/useActions.ts";
import {alertSelector} from "../store/alert/alert.selector.ts";

const AlertNotification: FC = () => {
    const alert = useAppSelector(alertSelector)
    const {clearAlert} = useActions()

    const handleModalClose = useCallback(() => {
        clearAlert()
    }, [clearAlert])

    if (!alert.id) {
        return null;
    }

    return (
        <div>
            <aside>
                <div>
                    <h3>
                        {alert.title}
                    </h3>
                    <button onClick={handleModalClose}>close</button>
                </div>
                <div>
                    <p>{alert.message}</p>
                </div>
            </aside>
        </div>
    )
}

export default AlertNotification;
