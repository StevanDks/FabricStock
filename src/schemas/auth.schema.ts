/**
 * @openapi
 * /login:
 *   post:
 *     tags:
 *       - Autenticação
 *     summary: Realiza o login de um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Email ou senha ausentes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Usuário não encontrado ou senha inválida
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "producao@example.com"
 *         senha:
 *           type: string
 *           example: "senhaFernanda123"
 *       required:
 *         - email
 *         - senha
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Login realizado com sucesso!"
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiam9hb0BleGFtcGxlLmNvbSIsInRpcG8iOiJHZXJlbnRlRGVQcm9kdWNhbyIsImlhdCI6MTY4NDk5MjAwMCwiZXhwIjoxNjg1MDAwODAwfQ.abc123xyz456"
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Usuário não encontrado."
 */