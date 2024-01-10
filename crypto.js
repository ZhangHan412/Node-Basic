const crypto = require('crypto');

// 生成RSA密钥对
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // 密钥长度
});

// 将公钥和私钥导出为PEM格式的字符串
const publicKeyPem = publicKey.export({
    type: 'spki',
    format: 'pem',
});
const privateKeyPem = privateKey.export({
    type: 'pkcs8',
    format: 'pem',
});

console.log('公钥:', publicKeyPem);
console.log('私钥:', privateKeyPem);
