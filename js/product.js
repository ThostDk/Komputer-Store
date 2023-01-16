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
const TransferJsonToPosts = (Json) => {
    allPosts = Json
}

// function that filters the json text by the ID  
const filterPostByLaptopId = (laptopId) => {
    currentPost = allPosts[laptopId]
}
const getPostTitle = () => currentPost.title
const getPostDescription = () => currentPost.description
const getPostSpecs = () => currentPost.specs
const getPostPrice = () => currentPost.price
const getPostImage = () => `https://hickory-quilled-actress.glitch.me/${currentPost.image}`

const updateSelectedLaptopHTML = () => {
    selectedLaptopImageElement.src = `https://hickory-quilled-actress.glitch.me/${currentPost.image}`
    selectedLaptopTitleElement.textContent = currentPost.title
    selectedLaptopDescriptionElement.textContent = currentPost.description
    selectedLaptopFeaturesElement.textContent = currentPost.specs
    selectedLaptopPriceElement.textContent = currentPost.price
}

const fillDropdown = () => {
    lapTopDropdownElement.onchange = () => changeDropdown(currentPost)
    allPosts.forEach(element => {
        let dropdownChildElement = document.createElement("option");
        dropdownChildElement.textContent = element.title;
        dropdownChildElement.value = element.id - 1;
        lapTopDropdownElement.appendChild(dropdownChildElement);
    });
}

function changeDropdown() {
    lapTopDropdownElement
    currentLaptopId = lapTopDropdownElement.options[lapTopDropdownElement.selectedIndex].value;
    filterPostByLaptopId(currentLaptopId);
    updateSelectedLaptopHTML(currentPost);
    //alert(selectedValue);
}

const product = {
    initializePosts: TransferJsonToPosts,
    filterPostByLaptopId,
    getPostTitle,
    getPostDescription,
    getPostSpecs,
    getPostPrice,
    getPostImage,
    updateSelectedLaptopHTML,
    fillDropdown
}

export default product;