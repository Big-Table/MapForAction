export const baseURL = 'http://localhost:3000'

const parseData = response => response.json()

//GET REQUESTS

//get to incidents
export const getIncidents = () => fetch(`${baseURL}/incidents`).then(parseData)

//get to incident with tweets
export const getIncidentWithTweets = (id) => fetch(`${baseURL}/incidents/tweets/${id}`).then(parseData)


//POST REQUESTS 

//post to incidents 
export const postIncidents = (data) => fetch(`${baseURL}/incidents`, {
    method: 'POST', 
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(parseData)

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

//post to tweets
export const postTweets = (data) => fetch(`${baseURL}/tweets`, {
    method: 'POST', 
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(parseData)