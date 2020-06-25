export const baseURL = "http://localhost:5000";

const parseData = (response) => response.json();

//GET REQUESTS

//get to incidents
// export const getIncidents = () => fetch(`${baseURL}/incidents`).then(parseData);

//get to approved incidents 
export const getApprovedIncidents = () => fetch(`${baseURL}/incidents/approved`).then(parseData)

//get to pending incidents 
export const getPendingIncidents = () => fetch(`${baseURL}/incidents/pending`).then(parseData)

//get to approved tweets
export const getApprovedTweets = () => fetch(`${baseURL}/tweets/approved`).then(parseData) 

//get to pending tweets 
export const getPendingTweets = () => fetch(`${baseURL}/tweets/pending`).then(parseData)

//get to approved actions
export const getApprovedActions = () => fetch(`${baseURL}/actions/approved`).then(parseData) 

//get to pending actions
export const getPendingActions = () => fetch(`${baseURL}/actions/pending`).then(parseData)

//get to incident with tweets AND actions --> NEED TO RENAME
export const getIncidentWithTweets = (id) =>
  fetch(`${baseURL}/incidents/${id}`).then(parseData);

//POST REQUESTS

//post to incidents
export const postIncidents = (data) =>
  fetch(`${baseURL}/incidents`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

//post to actions
export const postActions = (data) =>
  fetch(`${baseURL}/actions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

//post to tweets
export const postTweets = (data) =>
  fetch(`${baseURL}/tweets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);


//PATCH REQUESTS 

//patch to incidents approve

export const patchApproveIncident = (data) => 
    fetch(`${baseURL}/incidents/approve`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to incidents deny
  export const patchDenyIncident = (data) => 
    fetch(`${baseURL}/incidents/deny`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to incidents 
  export const patchIncident = (data, id) => 
  fetch(`${baseURL}/incidents/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to tweets approve 
  export const patchApproveTweet = (data) => 
    fetch(`${baseURL}/tweets/approve`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to tweets deny
  export const patchDenyTweet = (data) => 
    fetch(`${baseURL}/tweets/deny`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to tweets 
  export const patchTweet = (data, id) => 
  fetch(`${baseURL}/tweets/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

   //patch to actions approve 
   export const patchApproveAction = (data) => 
   fetch(`${baseURL}/actions/approve`, {
   method: "PATCH",
   headers: {
     "content-type": "application/json",
     accept: "application/json",
   },
   body: JSON.stringify(data),
 }).then(parseData);

  //patch to actions deny
  export const patchDenyAction = (data) => 
    fetch(`${baseURL}/actions/deny`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);

  //patch to actions 
  export const patchAction = (data, id) => 
  fetch(`${baseURL}/actions/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then(parseData);