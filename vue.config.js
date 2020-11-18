module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://payadmin1.dibugroup.com.cn',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        },
    },
}
