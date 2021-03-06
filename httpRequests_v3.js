// Modern approach of making HTTP request with async/await

class CustomAjaxLib {
    // Make a HTTP GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Get HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // Make a HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData;
    }

    // Make a HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })

        const resData = 'Resource deleted!';
        return resData;
    }

}