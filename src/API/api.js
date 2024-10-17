import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_6a1EOo7XnxHh4FM9Yus4B14UVuOaRz68YkQFmTeHzfDqu5gHBIXB5IcYJihW3mPl",
  },
});

export async function fetchBreeds() {
  try {
    const response = await api.get("/breeds");
    return response.data;
  } catch (error) {
    console.error("When retrieving a list of breeds:", error);
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await api.get(`/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    console.error("When receiving information about the breed:", error);
    throw error;
  }
}
