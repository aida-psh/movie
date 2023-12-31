import { useParams } from "react-router-dom";
import axiosClient from "./axiosClient";

export const category = {
    movie : 'movie',
    tv : 'tv'
}

export const tvType = {
    popular : 'popular',
    top_rated : 'top_rated',
    on_the_air : 'on_the_air',
}

export const movieType = {
    popular : 'popular',
    upcoming : 'upcoming', 
    top_rated : 'top_rated',
}

const tmdbApi = {
    getMovieList : (type , params) => {
        const url = '/movie' + movieType[type];
        return axiosClient.get(url , params);
    },

    getTvList : (type , params) => {
        const url = '/tv' + tvType[type];
        return axiosClient.get(url , params)
    },

    getVideos : (cate , id) => {
        const url = category[cate] + '/' + id + 'videos';
        return axiosClient.get(url , {params : {}});
    },

    search : (cate , params) => {
        const url =  'search/' + category[cate];
        return axiosClient.get(url , params);
    },

    detail : (cate , id , params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url , params);
    },

    credits : (cate , id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url , {params : {}});
    },

    similar : (cate , id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url , {params : {}});
    },

    top_rated  : (cate ) => {
        const url = category[cate] + '/top_rated';
        return axiosClient.get(url , {params : {}})
    },

    Trending : (params) => {
        const url = 'Trending/' + 'all' + '/week';
        return axiosClient.get(url , params);
    }

    



}

export default tmdbApi;