/**
 * API Request
 */
export const apiRequest = async (endPoint, httpMethod, bodyParams) => {
    const response = await fetch(endPoint, {
        method: httpMethod,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyParams)
    });
    return await response.json();
};