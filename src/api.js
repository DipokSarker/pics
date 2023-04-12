import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID kfW8XgaxM0t9GEmy5gsBnTKZghLuS3g5oey05XWleek'
        },
        params: {
            query: term,
        }
});

return response.data.results;
};

export default searchImages;