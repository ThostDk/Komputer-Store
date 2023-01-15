async function fetchJsonPost(){
    try {
        const postResult = await fetch("https://hickory-quilled-actress.glitch.me/computers")
    }
    catch(error){
        console.log(error)
    }
}
export default fetchJsonPost;
