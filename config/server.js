const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');  

const booking_materiRouter = require('../app/routes/booking_materiRouter.js');
const bookingRouter = require('../app/routes/bookingRouter.js');
const materiRouter = require('../app/routes/materiRouter.js');
const pembayaranRouter = require('../app/routes/pembayaranRouter.js');
const tempat_dudukRouter = require('../app/routes/tempat_dudukRouter.js');
const userRouter = require('../app/routes/userRouter.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {res.send('안녕! Fadilla disini (^o^)!');});

app.use('/booking_materi', booking_materiRouter);
app.use('/booking', bookingRouter);
app.use('/materi', materiRouter);
app.use('/pembayaran', pembayaranRouter);
app.use('/tempat_duduk', tempat_dudukRouter);
app.use('/user', userRouter);

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`);});
