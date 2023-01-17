let currentLaptopId;
let allPosts = [];
let currentPost = [];

const lapTopDropdownElement = document.getElementById("dropdown")
const selectedLaptopDescriptionElement = document.getElementById("selectedLaptopDescription")
const selectedLaptopTitleElement = document.getElementById("selectedLaptopTitle")
const selectedLaptopFeaturesElement = document.getElementById("featuresText")
const selectedLaptopPriceElement = document.getElementById("productPrice")
const selectedLaptopImageElement = document.getElementById("laptopImage")

// function that grabs the json elements and adds it to an array 
const transferJsonToPosts = (Json) => {
    allPosts = Json
}

// function that filters the post by given ID  
const filterPostByLaptopId = (laptopId) => {
    currentPost = allPosts[laptopId]
}
const getPostTitle = () => currentPost.title;
const getPostDescription = () => currentPost.description;
const getPostSpecs = () => currentPost.specs;
const getPostPrice = () => currentPost.price;
const getPostImage = () => `https://hickory-quilled-actress.glitch.me/${currentPost.image}`;

//updates the HTML to have the right content
const updateSelectedLaptopHTML = () => {
    selectedLaptopTitleElement.textContent = getPostTitle();
    selectedLaptopDescriptionElement.textContent = getPostDescription();
    createFeaturesList();
    selectedLaptopPriceElement.textContent = getPostPrice() + " kr";
    selectedLaptopImageElement.src = getPostImage();
}

// fills up the product dropdown with options corresponding with the products given on the json file
const fillDropdown = () => {
    lapTopDropdownElement.onchange = changeDropdown
    allPosts.forEach(element => {
        let dropdownChildElement = document.createElement("option");
        dropdownChildElement.textContent = element.title;
        dropdownChildElement.value = element.id - 1;
        lapTopDropdownElement.appendChild(dropdownChildElement);
    });
}

// changes the current selected ID to the selected index of the product dropdown
function changeDropdown() {
    currentLaptopId = lapTopDropdownElement.options[lapTopDropdownElement.selectedIndex].value;
    filterPostByLaptopId(currentLaptopId);
    updateSelectedLaptopHTML(currentPost);
}

//creates a HTML bulletpoint list <ul><li> with the current laptops features/specs. 
const createFeaturesList = () => {
    //removes preexisting list elements before creating the updated content
    while (selectedLaptopFeaturesElement.lastElementChild) {
        selectedLaptopFeaturesElement.removeChild(selectedLaptopFeaturesElement.lastElementChild);
    }
    let ulElement = document.createElement("ul");
    selectedLaptopFeaturesElement.append(ulElement);
    getPostSpecs().forEach(element => {
        let liElement = document.createElement("li");
        liElement.textContent = element;
        ulElement.appendChild(liElement);
    });
}

const products = {
    transferJsonToPosts,
    filterPostByLaptopId,
    getPostTitle,
    getPostDescription,
    getPostSpecs,
    getPostPrice,
    getPostImage,
    updateSelectedLaptopHTML,
    fillDropdown
}

export default products;