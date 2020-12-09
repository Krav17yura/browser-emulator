import React, {useState} from 'react';
import './App.css';
import Tabs from "./components/tabs";
import AddressBar from "./components/adress-bar";

const App = () => {
    const [browsers, setBrowsers] = useState([
        "https://memory-game-f35f6.web.app/",
        "https://animated-chat-ef400.web.app/",
        "https://calculator-aa011.web.app/",
        "https://contacts-reactredux.web.app/",
        "https://unsplashimagegallery.web.app/"


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
