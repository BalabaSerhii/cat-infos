import { fetchBreeds, fetchCatByBreed } from "../API/api";
import SlimSelect from "slim-select";

const selector = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const load = document.querySelector(".loader");
const error = document.querySelector(".error");

function getCatsList(breed) {
  selector.innerHTML = breed
    .map((breed) => `<option value="${breed.id}">${breed.name}</option>`)
    .join("\n");
}

function fetchBreedsSetList() {
  fetchBreeds()
    .then((res) => {
      getCatsList(res);
    })
    .then(() => new SlimSelect({ select: `.breed-select` }));
}

fetchBreedsSetList();
