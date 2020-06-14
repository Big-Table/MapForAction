export const baseURL = 'http://localhost:3000'

const parseData = response => response.json()

//this is the post to incidents 
export const postIncidents = (data) => fetch(`${baseURL}/incidents`, {
    method: 'POST', 
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(parseData)

export const getIncidents = () => fetch(`${baseURL}/incidents`).then(parseData)
    
