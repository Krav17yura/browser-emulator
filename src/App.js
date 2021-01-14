import React, {useState} from 'react';
import './App.css';
import Tabs from "./components/tabs";
import AddressBar from "./components/adress-bar";

const App = () => {
    const [browsers, setBrowsers] = useState([
        "https://reactreduxfirebase-auth.web.app/login",
        "https://contacts-reactredux.web.app/",
        "https://moviedb-882ec.web.app/",
        "https://twitter-clone-53831.web.app/auth",
        "https://corona-timer-8df0c.firebaseapp.com/",
        "https://test-task-bb726.web.app/",
        "https://unsplashimagegallery.web.app/",
        "https://lorem-ipsum-text-generator.web.app",
        "https://memory-game-f35f6.web.app/",
        "https://trivia-question-bde93.web.app/",
        "https://typo-game.web.app",
        "https://paperrockscissors-dfad6.web.app",
        "https://multy-step-form.web.app",
        "https://calendar-c86f6.web.app",
        "https://animated-chat-ef400.web.app/",
        "https://calculator-aa011.web.app/",
        "https://simpletimer-a45f9.web.app"
    ]);
    const [activeBrowser, setActiveBrowser] = useState(0)
    const url = browsers[activeBrowser]

    const chooseBrowser = (id) => {
        setActiveBrowser(id)
    }

    const addBrowser = () => {
        setBrowsers(() => [...browsers, ''])
        setActiveBrowser(() => browsers.length)
    }

    const updateBrowser = (url) => {
        const newBrowsers = [...browsers]
        newBrowsers[activeBrowser] = url;
        setBrowsers(newBrowsers)

    }

    const closeBrowser = (id) => {
        if (browsers.length !== 1) {

            const oldBrowsers = [...browsers];
            const newBrowsers = oldBrowsers.filter((b, index) => index !== id);
            const oldUrl = oldBrowsers[activeBrowser];
            console.log(newBrowsers.length)


            const newActiveBrowser =
                activeBrowser > newBrowsers.length - 1
                    ? newBrowsers.length - 1
                    : newBrowsers.findIndex((b) => b === oldUrl) && 0;

            setBrowsers(newBrowsers);
            setActiveBrowser(newActiveBrowser)
        }
    }


    return (
        <div className="app">
            <div className="browser">
                <Tabs browsers={browsers} activeBrowser={activeBrowser} choose={chooseBrowser} add={addBrowser}
                      close={closeBrowser}/>
                <AddressBar update={updateBrowser} url={url} browsers={browsers}/>
                <div className="viewport">
                    {url ? (
                        <iframe src={url} title='Stuff'/>
                    ) : (
                        <>New Tab Page</>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
