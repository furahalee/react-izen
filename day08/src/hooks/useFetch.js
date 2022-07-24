import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async() => {
        try {
            const res = await fetch(url);
            console.log(res)
            if(!res.ok) throw error
            const json = await res.json();
            setData(json);
            setError(null);
            setLoading(true);
        }catch(error) {
            setData([]);
            setError(error);
            console.log(error)
            setLoading(false);
        }
    }
    getData();
 

    // fetch(url)
    // .then(res => res.json())
    // .then( res => {
    //     setData(res)
    //     setError(null)
    //     setLoading(true)
    // })
    // .catch(error => {
    //     setData([])
    //     setError(error)
    //     setLoading(false)
    // })
  }, []);
  return { data, loading, error };
};

export default useFetch;
