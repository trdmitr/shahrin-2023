import { useState, useEffect } from "react";
import Papa from "papaparse";

const useFetch = (url) => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined
      });
  function fetchNow(url) {

    setStatus({ loading: true });
    Papa.parse(url,
        {
         download: true,
         header: true,
         complete: (results) => {
            setStatus({ loading: false, data: results.data })
           
          
         },
         skipEmptyLines: true,
         error: (error) => {
           console.error(error);
           setStatus({ loading: false, error: "error" });
           
       }
       })
  }
  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, [url]);
  return {...status, fetchNow };
}

export default useFetch