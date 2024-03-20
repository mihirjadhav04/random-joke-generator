// const express = require('express')
import express from "express"
import axios from "axios"
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/api/v1/getAjoke', async (req, res) => {
    try {
        // Make a GET request to the external API
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes/joke/random');

        // Extract the joke data from the response
        const data = response.data;
        // console.log(joke["data"]["content"]);
        // Send the joke data as a response from your own API
        const joke = data["data"]["content"]
        res.json(joke);
    } catch (error) {
        // If there's an error, send an error response
        console.error('Error fetching joke:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})