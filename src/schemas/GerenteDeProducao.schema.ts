/**
 * @openapi
 * /usuariosProducao:
 *   get:
 *     tags:
 *       - GerentesDeProducao
 *     summary: Lista todos os gerentes de produção
 *     responses:
 *       200:
 *         description: Lista de gerentes de produção
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GerenteDeProducao'
 *   post:
 *     tags:
 *       - GerentesDeProducao
 *     summary: Cria um novo gerente de produção
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GerenteDeProducaoInput'
 *     responses:
 *       201:
 *         description: Gerente de produção criado com sucesso
 * /usuariosProducao/{id}:
 *   get:
 *     tags:
 *       - GerentesDeProducao
 *     summary: Busca um gerente de produção por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gerente de produção encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GerenteDeProducao'
 *       404:
 *         description: Gerente de produção não encontrado
 *   put:
 *     tags:
 *       - GerentesDeProducao
 *     summary: Atualiza um gerente de produção por ID
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
 *             $ref: '#/components/schemas/GerenteDeProducaoInput'
 *     responses:
 *       200:
 *         description: Gerente de produção atualizado com sucesso
 *       404:
 *         description: Gerente de produção não encontrado
 *   delete:
 *     tags:
 *       - GerentesDeProducao
 *     summary: Deleta um gerente de produção por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gerente de produção deletado com sucesso
 *       404:
 *         description: Gerente de produção não encontrado
 * components:
 *   schemas:
 *     GerenteDeProducao:
 *       type: object
 *       properties:
 *         IdGerenteDeProducao:
 *           type: integer
 *           example: 30
 *         Nome:
 *           type: string
 *           example: "Fernanda Producao"
 *         Email:
 *           type: string
 *           example: "producao@example.com"
 *         NiveldePermissao:
 *           type: integer
 *           example: 2
 *         TipoDeUsuario:
 *           type: string
 *           example: "GerenteDeProducao"
 *         Pedidos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Pedido'
 *     GerenteDeProducaoInput:
 *       type: object
 *       properties:
 *         Nome:
 *           type: string
 *           example: "Fernanda Producao"
 *         Email:
 *           type: string
 *           example: "producao@example.com"
 *         Senha:
 *           type: string
 *           example: "senhaFernanda123"
 */