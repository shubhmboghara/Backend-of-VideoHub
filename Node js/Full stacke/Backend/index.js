import express  from "express"

const app = express()




app.get('/api/jokes', (req, res) => { 
    const jokes = [
        { id: 1, joke: "Why did the tea refuse to fight? Because it didn’t want to chai hard!" },
        { id: 2, joke: "What’s an Indian programmer’s favorite dessert? Jalebi loops!" },
        { id: 3, joke: "Why don’t autos ever go on a diet? Because they always carry extra weight!" }
    ];

    res.json(jokes);
});

const port = process.env.PORT || 5000
app.listen(port, () => { 

    console.log(`http://localhost:${port}.`)

 })