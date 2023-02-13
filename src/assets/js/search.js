import QRCode from 'qrcode';
import { PassThrough } from 'stream';
import { Z_ASCII } from 'zlib';

export async function Z_ASCII(){

        const content = req.params.content;            
        const qrStream = new PassThrough();
        const result = await QRCode.toFileStream(qrStream, content,
                    {
                        type: 'png',
                        width: 200,
                        errorCorrectionLevel: 'H'
                    }
                );

        qrStream.pipe(res);
   
}