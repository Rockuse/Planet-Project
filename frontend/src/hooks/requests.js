const API_URL = process.env.NODE_ENV !== 'production'?'https://localhost:8000/v1':process.env.REACT_APP_API_URL+'/v1'
console.log(API_URL)
// console.log(process.env.NODE_ENV)
// console.log(process.env.REACT_APP_API_URL)
async function httpGetPlanets() {
  // console.log(API_URL)
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  return await response.json()
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // console.log(API_URL)
  const response = await fetch(`${API_URL}/launches`)
  const fetchedlaunches = await response.json()
  return fetchedlaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch)
    })
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
  } catch (error) {
    return { ok: false }
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
    return { ok: false }
  }
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

async function httpsuccessLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'PUT',
    })
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
  // TODO: Once API is ready.
  // Delete launch with given ID.
}


export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
  httpsuccessLaunch,
};