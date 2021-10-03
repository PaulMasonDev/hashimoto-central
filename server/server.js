const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");
const app = express();

//app.use(cors());
app.use(express.json());

app.get("/getLinkList/:searchTerm", (req, res) => {
  const { searchTerm } = req.params;
  getHtml(`https://www.healmedelicious.com/?s=${searchTerm}`);
  //1. Get html from search query
  //2. Find links on page
  //3. Put links into array
  //4. Return links to f/e
});

const loadHtml = async (url) => {
  try {
    //This is how to get the website:
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    return $;
  } catch (err) {
    console.log(err.message);
  }
};

const getHtml = async (url) => {
  const $ = await loadHtml(url);
  const healMeDeliciousLinks = $(".entry-header");
  const linkArr = [];
  healMeDeliciousLinks.each((index, value) => {
    const link = $(value).find("a.entry-image-link").attr("href");
    const imgSrc = $(value)
      .find(".entry-image-link")
      .find("img")
      .attr("data-src");

    linkArr.push({ link, imgSrc });
  });
  const testValue = $(".entry-header a").attr("href");
  console.log({ linkArr });
};

app.listen((port = 5000), () => {
  console.log(`Listening on port ${port}`);
});
