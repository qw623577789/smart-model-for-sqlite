module.exports = {
	file: __dirname +"/../../test1.db",
	password: "123456", //不设的话,则数据库无加密
	cipherMode: "aes-256-cbc" //password字段存在时必传
};