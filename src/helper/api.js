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

export const viewSingleProduct = async (id) => {
    try {
        return await (await fetch(`${baseUrl}/viewSingleProduct/${id}`, {
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

export const getSingleFarmer = async (id) => {
    try {
        return await (await fetch(`${baseUrl}/getSingleFarmer/${id}`, {
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

export const createAccount = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/createuser`, {
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

export const createProduct = async (formData) => {
    try {
        const response = await fetch(`${baseUrl}/uploadfarmer_prod`, {
            method: 'POST',
            body: formData,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};


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
