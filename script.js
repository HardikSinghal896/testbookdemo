const options = {
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}'
};

console.log('a');
const fetchdata = async () => {
    console.log("f1");
    const response = fetch(options.url);
    console.log("f2");
}
fetchdata();
console.log("z1");
console.log("z2");
console.log("z3");
