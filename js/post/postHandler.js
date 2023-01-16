let allPosts = [];
let currentPost = [];

const lapTopDropdownElement = document.getElementById("dropdown")

const getPosts = () => [...currentPost]

// function that grabs the json elements and adds it to an array 
const initializePosts = (post) => {
    allPosts = post
    currentPost = post
    console.log(allPosts)
    //allPosts.forEach(element => {console.log(element)});
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

const fillDropdown = () => {
    allPosts.forEach(element => 
    {
        let dropdownChildElement = document.createElement("option");
        dropdownChildElement.textContent = element.title;
        lapTopDropdownElement.appendChild(dropdownChildElement);
    });
} 

const postHandler = {
    getPosts,
    initializePosts,
    filterPostByLaptopId,
    getPostTitle,
    getPostDescription,
    getPostSpecs,
    getPostPrice,
    getPostImage,
    fillDropdown
}

export default postHandler