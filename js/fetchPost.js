// async function for fetching data from the online Json file 
async function fetchJsonPosts() {
    // try and fetch json string data
    try {
        const postResult = await fetch("https://hickory-quilled-actress.glitch.me/computers")
        const post = await postResult.json();
        return post;
    // if it fails return a error message to the console
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchJsonPosts;