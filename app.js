const express = require('express');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users.route');
const storiesRouter = require('./routes/stories.route');
const relaysRouter = require('./routes/relays.route');
const likesRouter = require('./routes/likes.route')
const { swaggerUi, swaggerSpec } = require('./swagger/swagger')
const cors = require('cors')

const app = express();
const PORT = 3018;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(cookieParser());

app.use('/', [usersRouter, storiesRouter]);
app.use('/stories/', [relaysRouter, likesRouter]);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
    console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
});
