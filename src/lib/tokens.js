const generateToken = () =>Math.random().toString(32).substring(3)+Date.now().toString(32)+Math.random().toString(32).substring(3); //* numero aleatorio, fecha, numero aleatorio


//module.exports(generateToken);
export{
    generateToken
}