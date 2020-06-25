export const basicFetch = (url, fetchData) => {
    const {
        body,
        headers,
        method
    } = fetchData;

    return fetch(url, {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        method: method || 'GET'
    })
        .then(res => res.json())
        .catch(error => error);
};

export const postData = (url, fetchData) => {
    return basicFetch(url, {
        method: fetchData.method || 'POST',
        ...fetchData
    });
};
