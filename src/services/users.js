import api from "./apiConfig.js";
import {jwtDecode} from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    console.log(user, resp, credentials)
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwtDecode(token);

    const res = await api.get(`/users/${user.id}`);
    return res.data;
  }
  return false;
};

export const favGame = async (gameId) => {
  const resp = await api.put(`/users/favGame/${gameId}`);
  return resp.data
}

export const getFavGames = async () => {
  const resp = await api.get("/users/favGames");
  return resp.data
}

export const deleteFavGame = async (gameId) => {
  const resp = await api.delete(`/users/deleteFavGame/${gameId}`);
  return resp.data
}


export const findUser = async(id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

