import { useEffect, useState } from 'react';
import axios from "axios";

const useApi = ({ url }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({});

    async function fetchData(url) {
        const response = await axios.get(url);
        const data = await response.data;
        setData(data);
    }
    useEffect(() => {
        setLoading(true);
        try {
            fetchData();
        } catch(err) {
            setError(err);
        }
        setLoading(false);
    }, []);

    return {
        loading,
        data,
        error,
    }
}

export default useApi;
