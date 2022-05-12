import axios from "axios";
const apiKey = "1bc53850ac3dbc4ed826ef6c69bf5c08";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const weather = async (city) => {
  console.log(city);
    const realCity= encodeURI(city)
  const weather = axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q={${realCity}}&appid=1bc53850ac3dbc4ed826ef6c69bf5c08`
  );
    try {
      const lat=(await weather).data[0].lat
    const lon=(await weather).data[0].lon
    const data=instance.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  return((await data).data);
    } catch (error) {
      return console.log(error.message);
    }
    

  
};
