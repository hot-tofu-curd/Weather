// import axios from 'axios'
// const request = axios.create({
//     headers:{
//         'Content-Type':'application/x-www-form-urlencoded'
//     },
//     method:'post',
//     data:{
//         key:'21ffa57fe7157cf8e11d0106a16eccec'
//     }

//   })
  
//   export default request
import axios from 'axios';
import qs from 'qs';
let Key = '21ffa57fe7157cf8e11d0106a16eccec';

function axiosPost(option){

    axios({
        url:option.url,
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        method:'post',
        data:qs.stringify({
            ...option.data,
            key:Key
        })
    })
    .then((res)=>{
        option.success(res.data);
    })
    .catch((err)=>{
        option.error(err);
    })
}
export default axiosPost