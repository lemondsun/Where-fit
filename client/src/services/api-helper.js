import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001"
})

// ============== Home ================

export const indexHome = async () => {
  const resp = await api.get(`/`);
  return resp.data
}

export const showHome = async (id, getData) => {
  const resp = await api.get(`/${id}`, getData);
  return resp.data
}

// ============== Auth ================

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post('/login', loginData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  catch (e) {
    return ({ username: "", id: -1 })
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post('/register', registerData)
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  }
  catch (e) {
    return ({ username: "", id: null })
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/verify');
    return resp.data
  }
  return false;
}

// ============== User ===============



export const showUser = async (id, getData) => {
  const resp = await api.get(`/user/${id}`, getData);
  return resp.data
}

export const putUser = async (id, putData) => {
  const resp = await api.put(`/user/${id}`, putData);

  return resp.data
}
export const patchUser = async (id, putData) => {
  try {
    const response = await api.patch(`/user/${id}`, putData);
    return response.data
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }

}

export const destroyUser = async (id, deleteData) => {
  const resp = await api.delete(`/user/${id}`, deleteData);
  return resp.data
}

// ============== Location ===============


export const indexLocation = async (id, getData) => {
  const resp = await api.get(`/user/${id}/location`, getData);
  return resp.data
}

export const showLocation = async (id, getData) => {
  const resp = await api.get(`/user/:id/location/${id}`, getData);
  return resp.data
}

export const postLocation = async (id, postData) => {
  const resp = await api.post(`/user/${id}/location`, postData);
  return resp.data
}

export const putLocation = async (id, putData) => {
  const resp = await api.put(`/user/id/location/${id}`, putData);
  return resp.data
}

export const destroyLocation = async (id, deleteData) => {
  const resp = await api.delete(`/user/${id}/location/${id}`, deleteData);
  return resp.data
}


// ============== Activity ===============


export const indexActivity = async (userId, locationId) => {
  const resp = await api.get(`/user/${userId}/location/${locationId}/activity`, locationId);
  return resp.data
}

export const showActivity = async (id, getData) => {
  const resp = await api.get(`/user/${id}/location/${id}/activity/${id}`, getData);
  return resp.data
}


export const postActivity = async (userId, locationId, postData) => {
  const resp = await api.post(`/user/${userId}/location/${locationId}/activity`, postData);

  return resp.data
}

export const putActivity = async (userId, putData) => {


  const resp = await api.put(`/user/${userId}/location/${putData.location_id}/activity/${putData.id}`, putData);
  return resp.data
}

export const destroyActivity = async (id, deleteData) => {
  const resp = await api.delete(`/user/${id}/location/${id}/activity/${id}`, deleteData);
  return resp.data
}