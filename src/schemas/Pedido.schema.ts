/**
 * @openapi
 * /pedidos:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: Lista todos os pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 *   post:
 *     tags:
 *       - Pedidos
 *     summary: Cria um novo pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoInput'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 * /pedidos/{id}:
 *   get:
 *     tags:
 *       - Pedidos
 *     summary: Busca um pedido por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido não encontrado
 *   put:
 *     tags:
 *       - Pedidos
 *     summary: Atualiza um pedido por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoInput'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *   delete:
 *     tags:
 *       - Pedidos
 *     summary: Deleta um pedido por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 *       404:
 *         description: Pedido não encontrado
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       properties:
 *         IdPedido:
 *           type: integer
 *           example: 14
 *         Data:
 *           type: string
 *           format: date-time
 *           example: "2025-05-15T02:26:07.207Z"
 *         Status:
 *           type: string
 *           enum:
 *             - Pendente
 *             - EmTransporte
 *             - Entregue
 *           example: "Pendente"
 *         EnderecoDeEntrega:
 *           type: string
 *           example: "Rua do Cliente, 123"
 *         FornecedorId:
 *           type: integer
 *           example: 31
 *         TransportadoraId:
 *           type: integer
 *           example: 5
 *         GerenteDeProducaoId:
 *           type: integer
 *           example: 30
 *         Produtos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Produto'
 *     PedidoInput:
 *       type: object
 *       properties:
 *         Data:
 *           type: string
 *           format: date-time
 *           example: "2025-05-15T02:26:07.207Z"
 *         Status:
 *           type: string
 *           enum:
 *             - Pendente
 *             - EmTransporte
 *             - Entregue
 *           example: "Pendente"
 *         EnderecoDeEntrega:
 *           type: string
 *           example: "Rua do Cliente, 123"
 *         FornecedorId:
 *           type: integer
 *           example: 31
 *         TransportadoraId:
 *           type: integer
 *           example: 5
 *         GerenteDeProducaoId:
 *           type: integer
 *           example: 30
 *         Produtos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               IdProduto:
 *                 type: integer
 *                 example: 11
 */