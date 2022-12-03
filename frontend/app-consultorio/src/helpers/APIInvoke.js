import config from "../config/config.js";

class APIInvoke{
    async invokeGET(resource, queryParams){

        queryParams= queryParams || []
        const queryString= queryParams.reduce((last, q, i)=> last + `${i===0 ? '?': "&"}${q}`,'')

        const token= localStorage.getItem("token");
        let bearer;
        if (token===""){
            bearer="";
        }else{
            bearer=`Bearer ${token}`;
        }

        const data ={
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${config.apiURL}${resource}${queryString}`
        let response= (await (await fetch(url, data)).json())
        return response
    }

    async invokePUT(resource, body){

        const token= localStorage.getItem("token");
        let bearer;
        if (token===""){
            bearer="";
        }else{
            bearer=`Bearer ${token}`;
        }

        const data ={
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${config.apiURL}${resource}`
        let response= (await (await fetch(url, data)).json())
        return response
    }

    async invokePOST(resource, body){

        const token= localStorage.getItem("token");
        let bearer;
        if (token===""){
            bearer="";
        }else{
            bearer=`Bearer ${token}`;
        }

        const data ={
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${config.apiURL}${resource}`
        let response= (await (await fetch(url, data)).json())
        return response
    }

    async invokeDELETE(resource, body){

        const token= localStorage.getItem("token");
        let bearer;
        if (token===""){
            bearer="";
        }else{
            bearer=`Bearer ${token}`;
        }

        const data ={
            method: 'DELETE',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json',
                'authorization': bearer
            }
        }
        const url = `${config.apiURL}${resource}`
        let response= (await (await fetch(url, data)).json())
        return response
    }



    
}

export default new APIInvoke();