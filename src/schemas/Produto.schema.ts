/**
 * @openapi
 * /produtos:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *   post:
 *     tags:
 *       - Produtos
 *     summary: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProdutoInput'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 * /produtos/{id}:
 *   get:
 *     tags:
 *       - Produtos
 *     summary: Busca um produto por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 *   put:
 *     tags:
 *       - Produtos
 *     summary: Atualiza um produto por ID
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
 *             $ref: '#/components/schemas/ProdutoInput'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 *   delete:
 *     tags:
 *       - Produtos
 *     summary: Deleta um produto por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       properties:
 *         IdProduto:
 *           type: integer
 *           example: 1
 *         Nome:
 *           type: string
 *           example: "Produto A"
 *         Quantidade:
 *           type: integer
 *           example: 100
 *         Tipo:
 *           type: string
 *           enum:
 *             - ProdutoFinal
 *             - MateriaPrima
 *           example: "ProdutoFinal"
 *         PedidoId:
 *           type: integer
 *           nullable: true
 *           example: 1
 *         Pedido:
 *           $ref: '#/components/schemas/Pedido'
 *         Lotes:
 *           type: array
 *           nullable: true
 *           items:
 *             $ref: '#/components/schemas/Lote'
 *     ProdutoInput:
 *       type: object
 *       properties:
 *         Nome:
 *           type: string
 *           example: "Produto B"
 *         Quantidade:
 *           type: integer
 *           example: 50
 *         Tipo:
 *           type: string
 *           enum:
 *             - ProdutoFinal
 *             - MateriaPrima
 *           example: "ProdutoFinal"
 *         PedidoId:
 *           type: integer
 *           nullable: true
 *           example: 1
 */