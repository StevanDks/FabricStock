import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import GerenteDeProducaoRoutes from './routes/GerenteDeProducao.route';
import PedidoRoutes from './routes/Pedido.route';
import ProdutoRoutes from './routes/Produto.route';
import AuthRoutes from './routes/auth.route';
import { authMiddleware } from './middlewares/auth.middleware';

const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fabrick Stock API',
            version: '1.0.0',
            description: 'API para gerenciamento de estoque, pedidos e usuários',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/schemas/*.ts'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/usuariosProducao', authMiddleware, GerenteDeProducaoRoutes);
app.use('/pedidos', authMiddleware, PedidoRoutes);
app.use('/produtos', authMiddleware, ProdutoRoutes);
app.use('/login', AuthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
