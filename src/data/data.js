const base_url = "https://api.yelp.com/v3/businesses";
const apiKey =
  "9MqBJIOqNn_zy3vOm8tz-B3f9xKL_GRSipoaJ7FOuEB8bxi_N9HEPW9pSTviGD1HSD4JJUlo5XBSqmnlytotRgdg3TsA5akH_4nnUnYmjUIEtMuLig9JW9FHe-NSYXYx";

export default getRest = {
  // Get data
  getByCity: async (city, search) => {
    console.log(
      `${base_url}/search?location=${city}&term=${search}&categories=fastfood`
    );
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
};
