var express = require('express');
const rp = require('request-promise');
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
let xmlParser = require('xml2json');
var app = express();
const url_news1 = "https://www.spacex.com/news"
      url_news2 = "https://www.spacex.com/news?0=&page=1&1="
      url_news3 = "https://www.spacex.com/news?page=2"
      url_news4 = "https://www.spacex.com/news?page=3"

//https://www.spacex.com/news?page=2.xml
app.get('/news?page3', async function (req, res){
let xml
request('https://www.spacex.com/news.xml?2', async function (err, res, body) {

        if (err) { return console.log(err); }

        xml = body
        //console.log("-----------------------------------------------------------------------------------")
       // console.log("JSON OUTPUT", xmlParser.toJson(body))
        await fs.writeFile ("data2.json", xmlParser.toJson(body), function(err) {
            if (err) throw err;
            console.log('complete');
            }
);


        //  console.log(body)
         });
res.sendFile(__dirname + "/data2.json");
});


app.get('/news', async function (req, res){
let xml
request('https://www.spacex.com/news.xml', async function (err, res, body) {

	if (err) { return console.log(err); }

	xml = body
        //console.log("-----------------------------------------------------------------------------------")
       // console.log("JSON OUTPUT", xmlParser.toJson(body))
	await fs.writeFile ("data.json", xmlParser.toJson(body), function(err) {
	    if (err) throw err;
	    console.log('complete');
	    }
);
	
	
	//  console.log(body)
	 });
res.sendFile(__dirname + "/data.json");
});
app.get('/news?page1', async function (req, res){

request('https://www.spacex.com/news.xml?1=', async function (err, res, body) {

        if (err) { return console.log(err); }

        xml = body
        //console.log("-----------------------------------------------------------------------------------")
       // console.log("JSON OUTPUT", xmlParser.toJson(body))
        await fs.writeFile ("data1.json", xmlParser.toJson(body), function(err) {
            if (err) throw err;
            console.log('complete');
            }
);


        //  console.log(body)
         });
res.sendFile(__dirname + "/data1.json");
});



app.get('/starlink', function (req, res) {
 	res.sendFile(__dirname + '/starlink.jpg')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
