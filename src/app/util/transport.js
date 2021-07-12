export async function reqGet(url, headers) {
    const response = await fetch(url, {
        method: 'GET',
        headers: headers
    });
    if (response.redirected) {
        window.location.href = response.url;
    }
    if (response.ok) {
        return response.json();
    } else {
        throw new Error();
    }
}

export async function reqPost(url, body, headers) {
    const response = await fetch(url,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
    if (response.redirected) {
        window.location.href = response.url;
    }
    if (response.ok) {

        return response.json();
    } else {

        throw ErrorEvent;
    }
}

export async function reqDel(url, headers) {
    const response = await fetch(url,
        {
            method: 'DELETE',
            headers
        });
    if (response.redirected) {
        window.location.href = response.url;
    }
    if (response.ok) {
        return response.json();
    } else {
        throw ErrorEvent;
    }
}

export async function reqPutForm(url, formData) {
    const response = await fetch(url,
        {
            method: 'PUT',
            body: formData
        });
    if (response.redirected) {
        window.location.href = response.url;
    }
    if (response.ok) {
        return response.json();
    } else {
        throw ErrorEvent;
    }
}

export async function reqPostForm(url, formData) {
    const response = await fetch(url,
        {
            method: 'POST',
            body: formData
        });
    if (response.redirected) {
        window.location.href = response.url;
    }
    if (response.ok) {
        return response.json();
    } else {
        throw ErrorEvent;
    }
}

