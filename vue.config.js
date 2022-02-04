
if (process.env.NODE_ENV === 'development'){
    process.env.VUE_APP_API_URL = JSON.stringify(`http://127.0.0.1:5000`)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/book-review/' : '/',
 
}