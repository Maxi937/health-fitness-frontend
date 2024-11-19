// This function just ensures that when axios raises an error - the error.response object is returned directly
export function registerAxiosResponseHandler(axios) {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response) {
                return error.response;
            }
            return Promise.reject(error);
        }
    );
}

export function registerTokenInterceptor(axios) {
    axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
}