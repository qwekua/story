import { pocketbaseClient } from "../lib/pocketbase";

const fetchVideos = async () => {
    const results = await pocketbaseClient.collection('videos').getFullList();
    return results;
}

export { fetchVideos };