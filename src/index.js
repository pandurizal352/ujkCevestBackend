const express = require ('express')
const Cors = require('cors')

const app = express();

app.use(Cors());
app.use(express.json());

// routes
const SiswaRoutes = require('./routes/siswaRoutes');


// prefix api
app.use('/api/siswa', SiswaRoutes);


app.get('/', (req, res)=> {
    res.send('api berjalan - gunakan /api/siswa');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`server berjalan pada port ${PORT}`);
})