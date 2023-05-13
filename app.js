const express = require('express');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users.route');

const relaysRouter = require('./routes/relays.route');
const storiesRouter = require('./routes/stories.route');

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());

app.use('/', [usersRouter, storiesRouter]);
app.use('/stories/', [relaysRouter]);


app.listen(PORT, () => {
    console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
});
