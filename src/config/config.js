const dotenv = require("dotenv");
dotenv.config({path: '../env/'+(process.env.ENV||"local")} )
exports.config = {
    
    db:{
        host            : process.env.DB_HOST || '127.0.0.1',
        user            : process.env.DB_USER || 'root',
        password        : process.env.DB_PWD || 'root',
        database        : process.env.DB_NAME || 'tucasaya',
        dbport          : process.env.DB_PORT || '3306',
        dialect         : process.env.DB_DIALECT,
    }
}
console.log(this.config)