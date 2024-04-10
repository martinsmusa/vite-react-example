import { AlertNotification } from './component';
import { BirthdayList } from './feature';
import { Layout } from './style/global.ts';

const App = () => {
    return (
        <>
            <AlertNotification/>
            <Layout>
                <BirthdayList/>
            </Layout>
        </>
    );
};

export default App;
