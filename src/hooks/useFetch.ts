import { useState, useEffect } from 'react';

const useFetch = (url: string, options?: RequestInit) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const responseData = await response.json();

                localStorage.setItem('fetchPayload', JSON.stringify(options?.body));
                localStorage.setItem('fetchResponse', JSON.stringify({ status: response.status, data: responseData }));

                console.log('Response Status:', response.status);
                console.log('Response Data:', responseData);

                setData(responseData);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
                console.error('Fetch error:', err);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;
