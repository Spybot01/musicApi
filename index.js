const express = require('express');
const app = express()
const PORT = 5232

const nigerianHipHopMusic = [
    {
        title: "Essence",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        picture: "https://example.com/wizkid-tems.jpg"
    },
    {
        title: "FEM",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f1",
        picture: "https://example.com/davido.jpg"
    },
    {
        title: "Ye",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f2",
        picture: "https://example.com/burnaboy.jpg"
    },
    {
        title: "Duduke",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f3",
        picture: "https://example.com/simi.jpg"
    },
    {
        title: "Jerusalema",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f4",
        picture: "https://example.com/masterkg.jpg"
    },
    {
        title: "Way Maker",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f5",
        picture: "https://example.com/sinach.jpg"
    },
    {
        title: "Soapy",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f6",
        picture: "https://example.com/naira-marley.jpg"
    },
    {
        title: "Joro",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f7",
        picture: "https://example.com/wizkid.jpg"
    },
    {
        title: "On the Low",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f8",
        picture: "https://example.com/burnaboy-on-the-low.jpg"
    },
    {
        title: "If",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f9",
        picture: "https://example.com/davido-if.jpg"
    },
    {
        title: "Fall",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f10",
        picture: "https://example.com/davido-fall.jpg"
    },
    {
        title: "Ginger",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f11",
        picture: "https://example.com/wizkid-ginger.jpg"
    },
    {
        title: "Billionaire",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f12",
        picture: "https://example.com/teni-billionaire.jpg"
    },
    {
        title: "Pana",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f13",
        picture: "https://example.com/tekno-pana.jpg"
    },
    {
        title: "Case",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f14",
        picture: "https://example.com/teni-case.jpg"
    },
    {
        title: "Bad Influence",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f15",
        picture: "https://example.com/omah-lay-bad-influence.jpg"
    },
    {
        title: "Godly",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f16",
        picture: "https://example.com/omah-lay-godly.jpg"
    },
    {
        title: "Koroba",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f17",
        picture: "https://example.com/tiwa-savage-koroba.jpg"
    },
    {
        title: "49-99",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f18",
        picture: "https://example.com/tiwa-savage-49-99.jpg"
    },
    {
        title: "Bounce",
        youtubeLink: "https://www.youtube.com/watch?v=9bZkp7q19f19",
        picture: "https://example.com/ruger-bounce.jpg"
    }
];



app.get('/api', (req, res)=>{
    try {
        res.status(201).json({Message: nigerianHipHopMusic})
    } catch (error) {
        res.status(501).json({Message: error})
    }
})
 app.get('/', (req, res)=>{
    res.send(`Welcome to my Page`)
 })
app.listen(PORT,()=>{
    console.log(`server has benn successfully started on ${PORT}`);
    
})


