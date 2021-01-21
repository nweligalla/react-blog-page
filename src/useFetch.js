import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errormsg, setErrormsg] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error("could not fetch data from the server!");
            }
            return res.json();
        }).then(jsonData => {
            setData(jsonData);
            setIsPending(false);
        }).catch(err => {
            setErrormsg(err.message);
            setIsPending(false);
            setErrormsg(null);
        });
    }, [url]);

    return { data, isPending, errormsg };
}

export default useFetch;