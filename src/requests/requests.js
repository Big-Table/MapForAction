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
    
export const getIncidentWithTweets = (id) => fetch(`${baseURL}/incidents/tweets/${id}`).then(parseData)

//post to actions
export const postActions = (data) => fetch(`${baseURL}/actions`, {
    method: 'POST', 
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(parseData)