async function fetchJsonPosts(){
    try {
        const postsResult = await fetch("https://hickory-quilled-actress.glitch.me/computers")
        const posts = await postsResult.json();
        return posts;
    }
    catch(error){
        console.log(error)
    }
}
export default fetchJsonPosts;
