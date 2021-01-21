import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errormsg, setErrormsg] = useState(null);

    useEffect(() => {

        const abortcontrol = new AbortController();


        setTimeout(() => {
            fetch(url, { signal: abortcontrol.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("could not fetch data from the server!");
                    }
                    return res.json();
                })
                .then(jsonData => {
                    setData(jsonData);
                    setIsPending(false);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                    else {
                        setErrormsg(err.message);
                        setIsPending(false);
                        setErrormsg(null);
                    }
                });
        }, 1000)
        return () => abortcontrol.abort();
    }, [url]);

    return { data, isPending, errormsg };
}

export default useFetch;