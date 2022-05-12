// Use this token to access the HTTP API:
// 5327333149:AAFywhnv5Q5s4rf3qoL48Zw6z51p6rf_1f4
// Keep your token secure and store it safely, it can be used by anyone to control your bot.
import telegramApi from "node-telegram-bot-api";
const token = "5327333149:AAFywhnv5Q5s4rf3qoL48Zw6z51p6rf_1f4";
import { weather } from "./service/weather.js";
const bot = new telegramApi(token, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "начало" },
  { command: "/weather", description: "погода" },

  { command: "/finish", description: "конец" },
]);

bot.on("message", async (msg) => {
  const chatid = msg.chat.id;

  //   console.log(msg);
  const privetstvie = () => {
    const name = msg.chat.first_name;
    const secondname = msg.chat.last_name;
    const privetstvie = `привет ${name || ""} ${secondname || ""}`;
    return privetstvie;
  };
  const getWeather = async (gorod) => {
    const data = await weather(msg.text);
    if (!data) {
      return "такого города нет"
    }
    console.log(data);
    const rassvet = new Date(data.sys.sunrise * 1000).toLocaleString();
    const zakakt = new Date(data.sys.sunset * 1000).toLocaleString();
    const pogoda = `Город ${data.name}: Чистота неба ${data.weather[0].description},температура ${data.main.temp} за цельсием, чувствуется как ${data.main.feels_like} за цельсием, рассвет:${rassvet} закат:${zakakt}`
    return pogoda;
  };
  const govno = {
    "/start": privetstvie(),
    "/finish": "bye bye",
    // "/weather": await getWeather(),
  };
  const normalaise = msg.text.toLowerCase();
  return bot.sendMessage(chatid, await getWeather());
});
