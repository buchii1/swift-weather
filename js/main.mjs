//Import necessasry modules
import { getLocation } from "./search.mjs";
import GetAPI from "./getAPI.mjs";
import { getCurrentLocation } from "./current_location.mjs";

//Write the code to gather info from the user
//add event listener to search button and access location button
//IF yes: Do they want us to get their location?
const searchForm = document.querySelector(".search-form");
const getLocationBtn = document.getElementById("getLocationBtn");

getLocationBtn.addEventListener("click", function (e) {
	e.preventDefault();
	getCurrentLocation().then(getApi);
});

searchForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	await getLocation().then(getApi);
});

function getApi(location) {
	const getAPI = new GetAPI(location);
	getAPI.init();
}
