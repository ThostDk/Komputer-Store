let allPosts = [];
let currentPosts = [];

const getPosts = () => [...currentPosts]

// function that grabs the raw json text and adds it to an array 
const initializePosts = (post) => {
    allPosts = post
    currentPosts = post
}

// function that filters the 
const filterPostByLaptopId = (laptopId) => {
    currentPosts = allPosts.filter(p => p.laptopId === laptopId)
}

const postView = {
    getPosts,
    initializePosts,
    filterPostByLaptopId
}

export default postView