# Weather
前端的天气查询网页

vite构建的vue3网页，过年的时候练手用的，api用的免费的。

部署的时候nginx得代理一下
```
        location ^~ /api {
            proxy_pass http://apis.juhe.cn/simpleWeather;
        }
```
