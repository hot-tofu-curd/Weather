module.exports = {
    proxy: {
        "/api": {
            target: "http://apis.juhe.cn/simpleWeather",
            changeOrigin: true,
            ws: true,
            secure: false,
            rewrite: path => path.replace(/^\/api/, '')
        }
        // '/api':'http://apis.juhe.cn/simpleWeather/query'
    }

}