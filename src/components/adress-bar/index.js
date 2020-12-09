import React, {useState, useEffect} from 'react'


const addHttps = (url) => {
    if (!url.startsWith('https') || !url.startsWith('https')) {
        return `https://${url}`;
    }
    return url
}

const AddressBar = ({update, url, browsers}) => {
    console.log(url)
    const [value, setValue] = useState(url || '')

    const handleSubmit = (e) => {
        e.preventDefault();
        const httpsUrl = addHttps(value);
        update(httpsUrl)
    }

    useEffect(() => {
        setValue(url)
    }, [url, browsers])

    return (
        <div className="address-bar">
            <form onSubmit={handleSubmit}>
                <input type="text" name="url" value={value} onChange={event => setValue(event.target.value)}/>
            </form>
        </div>
    )
}

export default AddressBar