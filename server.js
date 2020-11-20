const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/admin.routes') (app);
require('./server/routes/show.routes') (app);
require('./server/routes/about.routes') (app);

require('dotenv').config();

//const myFirstSecret = process.env.FIRST_SECRET_KEY;

app.listen(port, () => console.log(`listening on port ${port}`));
