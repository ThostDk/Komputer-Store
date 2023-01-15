let allPosts = [];
let currentPosts = [];

const getPosts = () => [...currentPosts]

const initializePosts = (post) => {
    allPosts = post
    currentPosts = post
}

const filterPostByUserId = (userId) => {
    currentPosts = allPosts.filter(p => p.userId === userId)
}

const postView = {
    getPosts,
    initializePosts,
    filterPostByUserId
}

export default postView