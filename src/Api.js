import axios from "axios";

export async function onSearch(keyWord) {
    const videos = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDP5y9xSN9lmKT4FZrmebkSL1W-eK8lIvk&type=video&q=${keyWord}&part=snippet&maxResults=20`);
    return videos;
}