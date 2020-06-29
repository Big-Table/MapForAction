import axios from 'axios'

export const baseURL = "http://localhost:5000";


const parseData = (response) => response.json();

//GET REQUESTS

//get to incidents
// export const getIncidents = () => fetch(`${baseURL}/incidents`).then(parseData);

//get to approved incidents 
export const getApprovedIncidents = () => axios.get(`/incidents/approved`)

//get to pending incidents 
export const getPendingIncidents = () => axios.get(`/incidents/pending`)

//get to approved tweets
export const getApprovedTweets = () => axios.get(`/tweets/approved`) 

//get to approved actions
export const getApprovedActions = () => axios.get(`/actions/approved`) 


//get to pending tweets 
export const getPendingTweets = () => axios.get(`/tweets/pending`)
// export const getPendingTweets = () => fetch(`${baseURL}/tweets/pending`).then(parseData())


//get to pending actions
export const getPendingActions = () => axios.get(`/actions/pending`)

//get to incident (with actions and tweets)
export const getIncidentWithTweets = (id) =>
  axios.get(`/incidents/${id}`)

//get to current user
export const getCurrentUser = () =>
  fetch(`${baseURL}/auth/currentUser`).then(parseData);

//POST REQUESTS

//post to incidents
export const postIncidents = (data) =>
  axios.post(`/incidents`, data)

//post to actions
export const postActions = (data) =>
  axios.post(`/actions`, data)

//post to tweets
export const postTweets = (data) =>
  axios.post(`/tweets`, data)

//PATCH REQUESTS 

//patch to incidents approve

export const patchApproveIncident = (data) => 
  axios.patch(`/incidents/approve`, data)

  //patch to incidents deny
export const patchDenyIncident = (data) => 
  axios.patch(`/incidents/deny`, data)

  //patch to incidents 
export const patchIncident = (data, id) => 
  axios.patch(`/incidents/${id}`, data)

  //patch to tweets approve 
  export const patchApproveTweet = (data) => 
    axios.patch(`/tweets/approve`, data)

  //patch to tweets deny
  export const patchDenyTweet = (data) => 
    axios.patch(`/tweets/deny`, data)

  //patch to tweets 
  export const patchTweet = (data, id) => 
  axios.patch(`/tweets/${id}`, data)

   //patch to actions approve 
   export const patchApproveAction = (data) => 
   axios.patch(`/actions/approve`, data)

  //patch to actions deny
  export const patchDenyAction = (data) => 
    axios.patch(`/actions/deny`, data)

  //patch to actions 
  export const patchAction = (data, id) => 
  axios.patch(`${baseURL}/actions/${id}`, data)