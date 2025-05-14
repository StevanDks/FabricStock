import express from 'express';
import GerenteDeProducaoRoutes from './routes/GerenteDeProducao.route';

const app = express();
app.use(express.json());
app.use('/usuarioProducao', GerenteDeProducaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
