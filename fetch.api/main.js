const url= 'http://localhost:4000/api/roles';

//loistar todos los roles
fetch(url, {
    method: 'GET',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQ1NTgwYjMyM2QwYzMxNWI1MjM2YyIsImlhdCI6MTY2OTA0ODA1NiwiZXhwIjoxNjY5MDc2ODU2fQ.Wfr-toIPauce1_pRgmTdzjDIY7fUo-4LWIxkSrIKiV0'
    }
})

    .then(response =>response.json())
    .then(data=> console.log(data))

//crear un rol
fetch(url, {
    method: 'POST',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQ1NTgwYjMyM2QwYzMxNWI1MjM2YyIsImlhdCI6MTY2OTA0ODA1NiwiZXhwIjoxNjY5MDc2ODU2fQ.Wfr-toIPauce1_pRgmTdzjDIY7fUo-4LWIxkSrIKiV0',
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "PRUEBA",
        estadoRol: 1
    })
})

    .then(response =>response.json())
    .then(data=> console.log(data))

//EDITAR UN ROL
const urlEditar= `${url}/637bbfb33163ea9e7211407f`
fetch(urlEditar, {
    method: 'PUT',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQ1NTgwYjMyM2QwYzMxNWI1MjM2YyIsImlhdCI6MTY2OTA0ODA1NiwiZXhwIjoxNjY5MDc2ODU2fQ.Wfr-toIPauce1_pRgmTdzjDIY7fUo-4LWIxkSrIKiV0',
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "PRUEBAS",
        estadoRol: 2
    })
})

    .then(response =>response.json())
    .then(data=> console.log(data))

//ELIMINAR UN ROL
const urlEliminar= `${url}/637bbfb33163ea9e7211407f`
fetch(urlEliminar, {
    method: 'DELETE',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmQ1NTgwYjMyM2QwYzMxNWI1MjM2YyIsImlhdCI6MTY2OTA0ODA1NiwiZXhwIjoxNjY5MDc2ODU2fQ.Wfr-toIPauce1_pRgmTdzjDIY7fUo-4LWIxkSrIKiV0'
        
    }
    })

    .then(response =>response.json())
    .then(data=> console.log(data))
