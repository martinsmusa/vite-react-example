import OnThisDay from "./feature/onThisDay/onThisDay.tsx";
import {AlertNotification} from "./component";

const App = () => {
    return (
        <>
            <AlertNotification />
            <main>
                <OnThisDay />
            </main>
        </>
    )
}

export default App
