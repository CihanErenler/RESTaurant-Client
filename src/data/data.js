const base_url = "https://api.yelp.com/v3/businesses/search";
const apiKey =
  "9MqBJIOqNn_zy3vOm8tz-B3f9xKL_GRSipoaJ7FOuEB8bxi_N9HEPW9pSTviGD1HSD4JJUlo5XBSqmnlytotRgdg3TsA5akH_4nnUnYmjUIEtMuLig9JW9FHe-NSYXYx";

export default getRest = {
  getByCity: async (city, search) => {
    const response = await fetch(
      `${base_url}?location=${city}${search ? "&term=" + search : ""}`,
      {
        headers: { Authorization: "Bearer " + apiKey },
      }
    );
    const data = await response.json();
    return data;
  },
  random: async () => {
    const response = await fetch("http://api.icndb.com/jokes/random");
    const data = await response.json();
    return data;
  },
};
