import { AppService } from './app.service';
import { RespuestaOk } from './shared/mensajes-response/RespuestaOk';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    pongoLoQueQuieraXQSoyCapo(): string;
    admin(): RespuestaOk;
}
