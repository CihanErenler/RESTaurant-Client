import Auth from "../data/auth";
const base_url = "https://api.yelp.com/v3/businesses";
const apiKey =
  "9MqBJIOqNn_zy3vOm8tz-B3f9xKL_GRSipoaJ7FOuEB8bxi_N9HEPW9pSTviGD1HSD4JJUlo5XBSqmnlytotRgdg3TsA5akH_4nnUnYmjUIEtMuLig9JW9FHe-NSYXYx";
const db_url = "http://192.168.38.113:3000/api";

export default getRest = {
  // Get data
  getByCity: async (city, search) => {
    const response = await fetch(
      `${base_url}/search?location=${city}&term=${search}&categories=fastfood`,
      {
        headers: { Authorization: "Bearer " + apiKey },
      }
    );
    const data = await response.json();
    return data;
  },

  // Get data by id
  getById: async (id) => {
    const response = await fetch(`${base_url}/${id}`, {
      headers: { Authorization: "Bearer " + apiKey },
    });
    const data = await response.json();
    return data;
  },

  // Get data by id
  getReviews: async (id) => {
    const response = await fetch(`${base_url}/${id}/reviews`, {
      headers: { Authorization: "Bearer " + apiKey },
    });
    const data = await response.json();
    return data;
  },

  // Get coordinate
  getByCoordinate: async ({ latitude, longitude }) => {
    const radius = 3000;
    const categories = "food";
    const url = `${base_url}/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=${categories}`;
    const response = await fetch(url, {
      headers: { Authorization: "Bearer " + apiKey },
    });
    const data = await response.json();
    return data;
  },

  // Get liked restaurant list
  getLikedRest: async (token) => {
    const data = await fetch(`${db_url}/liked`, {
      method: "GET",
      headers: { auth_token: token },
    });
    const list = await data.json();
    return list;
  },

  // Post restaurant
  addLiked: async (liked, token) => {
    const response = await fetch(`${db_url}/liked`, {
      method: "POST",
      headers: { auth_token: token, "Content-type": "application/json" },
      body: JSON.stringify(liked),
    });
    const data = await response.json();
    return data;
  },

  // Register user
  registerUser: async (user) => {
    const body = JSON.stringify(user);

    const response = await fetch(`${db_url}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    });
    const data = await response.json();
    return data;
  },

  // Login user
  loginUser: async (user) => {
    const response = await fetch(`${db_url}/user/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const headers = response.headers;
    const token = headers.get("auth-token");

    if (token) Auth.saveToken("user-token", token)
    const data = await response.json();
    return data;
  },

  // Delete restaurant by id
  deleteLiked: async (id, token) => {
    const response = await fetch(`${db_url}/liked/${id}`, {
      method: "DELETE",
      headers: { auth_token: token, "Content-type": "application/json" },
    });
    const data = await response.json();
    return data;
  },
};
