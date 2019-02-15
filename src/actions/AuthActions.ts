export const authTypes = {
    LOGIN: 'login',
    REGISTER: 'register',
    LOGOUT: 'logout'
}

export const login = (credentials: {}) => async (dispatch: any) => {
    try {
        const res = await fetch ('http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await res.json();
        if (body.auth) {
            dispatch( {
                payload: {
                    token: body.token,
                    user: body.user
                },
                type: authTypes.LOGIN
            })
        }
    }
    catch (err) {
        console.log(err);
    }
    
}

export const register = (credentials: {}) => async (dispatch: any) => {
    try {
        const res = await fetch ('http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:3000/register', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await res.json();
        if (body.auth) {
            dispatch( {
                payload: {
                    token: body.token,
                    user: body.user
                },
                type: authTypes.REGISTER
            })
        }
    }
    catch (err) {
        console.log(err);
    }
    
}

export const logout = () => {
    return {
        payload: {
            token: '',
            user: {
                id: 0,
                role: 0,
                username: '',
                password: '',
                email: '',
                firstName: '',
                lastName: ''
            }
        },
        type: authTypes.LOGOUT
    }
}