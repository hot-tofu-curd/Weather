import axiosPost from '../utils/axios'

export const getCitys =()=>{
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:'/api/cityList',
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

export const getWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:'/api/query',
            data:{
                city:city
            },
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}
