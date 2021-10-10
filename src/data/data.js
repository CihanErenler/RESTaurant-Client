const base_url = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
const db_url = process.env.DB_URL;

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
    const data = await fetch(db_url, {
      method: "GET",
      headers: {
        auth_token: token,
      },
    });
    const list = await data.json();
    return list;
  },

  // Post restaurant
  addLiked: async (liked, token) => {
    const response = await fetch(`${db_url}/liked`, {
      method: "POST",
      headers: {
        auth_token: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(liked),
    });
    const data = await response.json();
    return data;
  },

  // Register user
  registerUser: async (user) => {
    const response = await fetch(`${db_url}/user/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  },

  // Login user
  loginUser: async (user) => {
    const response = await fetch(`${db_url}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  },

  // Delete restaurant by id
  deleteLiked: async (id, token) => {
    const response = await fetch(`${db_url}/liked/${id}`, {
      method: "DELETE",
      headers: {
        auth_token: token,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  },
};
