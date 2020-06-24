export const baseURL = "http://localhost:5000";

const parseData = (response) => response.json();

//GET REQUESTS

//get to incidents
// export const getIncidents = () => fetch(`${baseURL}/incidents`).then(parseData);

//get to approved incidents 
export const getApprovedIncidents = () => fetch(`${baseURL}/incidents/approved`).then(parseData)

//get to pending incidents 
export const getPendingIncidents = () => fetch(`${baseURL}/incidents/pending`).then(parseData)

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