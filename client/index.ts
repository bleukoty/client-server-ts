import http from 'http';
import { createWriteStream } from 'fs';
import buffer from 'buffer';
console.log("call api user : ");
const fileStream = createWriteStream('./data_recevied.json', 'utf-8');
let data = '';
http.get('http://localhost:3030/', (res) => {
    res.on('data', (chunck: Buffer) => {
      //  console.log(chunck.toString('utf-8'));
        console.log(`data inside (length : ${chunck.toString('utf-8').length} )`);
        data += chunck;
    });

    res.on('end', () => {
        fileStream.write(data);
        console.log('fin de la lecture');
        
    });
});