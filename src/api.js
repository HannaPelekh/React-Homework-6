import axios from 'axios';

export const fetchPopularRepos = async (language) => {
    
        const requestLang = await axios.get(
            "https://api.github.com/search/repositories?q=stars:>1+language:" +
            language +
            "&sort=stars&order=desc&type=Repositories")           
        return requestLang.data.items      
}      