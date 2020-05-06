import Express from 'express';
import { createReadStream } from 'fs';

const app = Express();

app.get('/', (req, res) => {
    const streamFile = createReadStream('./data.json');
    // const streamFile2 = createReadStream('./test.json');
    streamFile.pipe(res);
    // streamFile2.pipe(res);
    // res.send('test ok');
})

app.listen(3030, () => console.log('server is running'));