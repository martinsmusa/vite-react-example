import OnThisDay from "./feature/onThisDay/onThisDay.tsx";
import {AlertNotification} from "./component";
import {Layout} from "./style/global.ts";

const App = () => {
    return (
        <>
            <AlertNotification />
            <Layout>
                <OnThisDay />
            </Layout>
        </>
    )
}

export default App
