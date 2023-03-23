const baseUrl = "http://localhost:5173";
import axios from 'axios';

export const login = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const adminlogin = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/adminlogin`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}


export const displayfarmer_profile = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/displayfarmer_profile`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        }));
    } catch (error) {
        console.log(error)
    }
}

export const displayfarmer_product = async () => {
    try {
        return await (await fetch(`${baseUrl}/displayfarmer_product`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        }));
    } catch (error) {
        console.log(error)
    }
}

export const viewFarmersProduct = async (id) => {
    try {
        return await (await fetch(`${baseUrl}/viewfarmersproduct/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        }));
    } catch (error) {
        console.log(error)
    }
}

// viewfarmersproduct/:id
// export const login = async (payload) => {
//     try {
//         const response = await axios.post(`${baseUrl}/adminlogin`, payload, {
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }