// Use this token to access the HTTP API:
// 5327333149:AAFywhnv5Q5s4rf3qoL48Zw6z51p6rf_1f4
// Keep your token secure and store it safely, it can be used by anyone to control your bot.
import express from "express";
import telegramApi from "node-telegram-bot-api";
const token = "5327333149:AAFywhnv5Q5s4rf3qoL48Zw6z51p6rf_1f4";
import { weather } from "./service/weather.js";
const bot = new telegramApi(token, { polling: true });
export const app=express()



bot.on("message", async (msg) => {
  const chatid = msg.chat.id;

  //   console.log(msg);
  const privetstvie = () => {
    const name = msg.chat.first_name;
    const secondname = msg.chat.last_name;
    const privetstvie = `привет ${name || ""} ${secondname || ""}`;
    return privetstvie;
  };
  const getWeather = async () => {
    const data = await weather(msg.text);
    if (!data) {
      return "такого города нет"
    }
    const den1 = `Дата: ${new Date(data.daily[0].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[0].weather[0].description},температура ${data.daily[0].temp.day} за цельсием, чувствуется как ${data.daily[0].feels_like.day} за цельсием, рассвет:${new Date(data.daily[0].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[0].sunset * 1000).toLocaleString()}`
    const den2 = `Дата: ${new Date(data.daily[1].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[1].weather[0].description},температура ${data.daily[1].temp.day} за цельсием, чувствуется как ${data.daily[1].feels_like.day} за цельсием, рассвет:${new Date(data.daily[1].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[1].sunset * 1000).toLocaleString()}`
    const den3 = `Дата: ${new Date(data.daily[2].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[2].weather[0].description},температура ${data.daily[2].temp.day} за цельсием, чувствуется как ${data.daily[2].feels_like.day} за цельсием, рассвет:${new Date(data.daily[2].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[2].sunset * 1000).toLocaleString()}`
    const den4 = `Дата: ${new Date(data.daily[3].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[3].weather[0].description},температура ${data.daily[3].temp.day} за цельсием, чувствуется как ${data.daily[3].feels_like.day} за цельсием, рассвет:${new Date(data.daily[3].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[3].sunset * 1000).toLocaleString()}`
    const den5 = `Дата: ${new Date(data.daily[4].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[4].weather[0].description},температура ${data.daily[4].temp.day} за цельсием, чувствуется как ${data.daily[4].feels_like.day} за цельсием, рассвет:${new Date(data.daily[4].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[4].sunset * 1000).toLocaleString()}`
    const den6 = `Дата: ${new Date(data.daily[5].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[5].weather[0].description},температура ${data.daily[5].temp.day} за цельсием, чувствуется как ${data.daily[5].feels_like.day} за цельсием, рассвет:${new Date(data.daily[5].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[5].sunset * 1000).toLocaleString()}`
    const den7 = `Дата: ${new Date(data.daily[6].dt * 1000).toLocaleString()} Город: ${msg.text}.
Чистота неба ${data.daily[6].weather[0].description},температура ${data.daily[6].temp.day} за цельсием, чувствуется как ${data.daily[6].feels_like.day} за цельсием, рассвет:${new Date(data.daily[6].sunrise * 1000).toLocaleString()} закат:${new Date(data.daily[6].sunset * 1000).toLocaleString()}`


const prognoz=`${den1}  
    ${den2}
    ${den3}
    ${den4}
    ${den5}
    ${den6}
    ${den7}`

    return prognoz
  };
  const govno = {
    "/start": privetstvie(),
    "/finish": "bye bye",
    "/weather": await getWeather(),
  };
  const normalaise = msg.text.toLowerCase();

  return bot.sendMessage(chatid, await getWeather(msg.text))
})

