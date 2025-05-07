import express from 'express';
import { create } from 'express-handlebars';

const handlebars = create({
    helpers: {
        isHome: (value) => value === "home" ? "active" : "",
    },
});

const app = express();
const port = 8000;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render('home.handlebars', {
        title: "Homepage",
        layout: "main.handlebars",
        page: "home",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});