const fetch = require("node-fetch");

export async function postData(url ,data ) {
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    query:{query:'tomer'},
    body: JSON.stringify(data) 
  });
  return response.json(); 
}
