---
title: Use the Magic of Node.js to get a PS5 or Xbox Series X!
description: Secure the bag
tags:
  - "Javascript"
ogImage: ./xbox-ps5.jpg
pubDatetime: 2020-12-28T15:57:52.737Z
---

<h2>Use the Magic of Node.js to get a PS5 or Xbox Series X!</h2>

If you would like to get straight to the source code, here is the github repo for the code discussed below: [github link](https://github.com/chrisbradshaw/xbox-and-ps5-scraper).

### Intro

Ahh next generation consoles, many of us would like one, especially after the atrocious performance of Cyberpunk 2077 on last generation consoles, but stock is scarce. Some options for non-programmers are to sit at home refreshing your browser every 30 seconds or check the Wario64 twitter account. But let me propose an alternate solution.

Using a simple Node.js program, we can utilize web scraping to check as many URLs as we like, refreshing as often as we like.. even while we're SLEEPING. This frees up your time to tone your quads on that new Peloton you just got for the holidays, or more realistically, to sit on the couch and binge Cardi Tries on Facebook Watch.

A quick disclaimer is that the purpose of this sample code is to open your eyes to the possibilities of what can be achieved with Node.js. It will alert you when a major retailer has a PS5 or XBOX Series X in stock, but it will not act like a bot and check out the product for you, or directly ping the retailer URL/API and risk getting your IP banned. Depending on how motivated you are, these things are certainly possible. I will make some suggestions at the end of the post for further resources, and feel free to email/message me directly if you want to nerd out on this subject.

### Importing Packages

We start with the package imports for our project:

![Packages To Import](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1609180281/code-screenshots/xbox-ps5-scraping/packages-import.png)

We're importing Axios (data fetching), Cheerio (parse DOM and pull out relevant info), logtimestamp (add time to our console logs so we have a history of when items were in stock), player (to play MP3 when we find stock), and open (to open the URL with stock in our default browser).

### Data Fetching

![Data Fetching](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1609180383/code-screenshots/xbox-ps5-scraping/data-fetching.png)

Next, we write functions to fetch the data. We're using [nowinstock.net](https://www.nowinstock.net) because they refresh their console listing pages every 60 seconds with listings from all top retailers, and they have an easily scrapable table with listing data. Here is an example page. You'll notice the **fetchDataFn** uses a template literal so that we can pass in a variable for the last section of the URL, which will come into play later. After fetching data from the sample URL we aggregate the information we want (name, link, status, price, and lastStock) into and object and push it into an array variable (**scrapedData**).

### Check for Stock and Alert if Stock Exists

![Check For Stock and Alert](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1609180428/code-screenshots/xbox-ps5-scraping/checkForStockAndAlert.png)

In the next function **checkForStockAndAlert**, we are expecting the **scrapedData** array of objects, and the index of the Promise we call in the next step. For index 0 we know the data will be for XBOX Series X and for index 1 the data will be for PS5 so we set appropriate name and mp3 file path information in the **consoleDataObject**.

We filter all returned data with parameters that would make a listing acceptable to us (not "Out of Stock", not "Not Tracking" status, and NOT FROM EBAY (ain't nobody got time for eBay mark ups) and store the filtered data in a potentials variable.

**Sidenote:** I found this site where you can create an MP3 with a computer voice of any text (think Siri), and that's what we're using for the alert sound for your computer speakers when stock is found.

If the potentials variable returns any results, we perform 3 actions:

1.  Log to the console what kind of console was found,
2.  Open the URL where the console was found in the default browser,
3.  Sound an alert on the PC speakers.

### Schedule the Task

![Final Function](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1609180466/code-screenshots/xbox-ps5-scraping/finalFunction.png)

The final function is where things get fun. First off, this schedule function is an IFEE so it is invoked as soon at this file is run. We create a Promise.all with 2 **fetchDataFns** (one for each console), that returns an array of **xboxData** and **ps5Data**. We forEach over that array calling the checkForStockAndAlert functions for each console. After finishing those tasks we have a setTimeOut function that calls the schedule function every 5 minutes that ensures this script will run every 5 minutes until we CTRL + C the process.

And that's it! You have a sample script that will imitate you refreshing your browser every 5 minutes for PS5 and XBOX Series X in perpetuity until you get one. This is a sample screenshot of the console output:

![Final Function](https://res.cloudinary.com/dgxvjwyhm/image/upload/v1609180495/code-screenshots/xbox-ps5-scraping/sample_console_output.png)

### Some suggestions to improve this script and for further resources:

- **Twilio** - you could add Twilio so that this script will text message you if stock is found, so that you do not always need to be near your PC to hear the speakers
- **You could spin up a headless browser using Puppeteer** and simulate any sort of action you like on actual retailer websites (use a VPN so you do not get your IP banned). If you are interested in this solution, I highly recommend cloning and running camtheperson's [get-my-ps5](https://github.com/camtheperson/get-my-ps5) Github repo. This solution is already ready to go. **Note:** it is only for PS5, and only for the Playstation Direct store, but you could easily follow the logic to expand to other consoles/retailers.
- **You could check retailer APIs directly**. I would suggest logging into the retailer of your choice's landing page for the console of your choice, then CTRL + CMD + I opening your Chrome Dev tools on Mac, navigate to the Network tab, then check for XHR requests, right clicking on the request that checks for stock and copying the Fetch request (with cookies specified) to start down this path.

And that's it! I hope this script was helpful for you. Again check the Github for the full code in the app.js file, and please star the repo and/or like this post if it was helpful to you. If you enjoyed this article, please like it and follow me on Twitter [@\_chrisbradshaw](https://twitter.com/_chrisbradshaw).
