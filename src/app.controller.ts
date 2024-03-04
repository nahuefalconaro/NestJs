import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { RespuestaOk } from './shared/mensajes-response/RespuestaOk'
@Controller("api/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//localhost:3000/api/
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("chau")//localhost:3000/api/chau
  pongoLoQueQuieraXQSoyCapo(): string {
    return this.appService.getDespedida();
  }

  @Get("admin")//localhost:3000/api/chau
  admin(): RespuestaOk {
    const obj:Object = this.appService.getPersona()
    return new RespuestaOk(obj, 'Objecto devuelto correctamente.', HttpStatus.OK);
  }
}
/**
 * fetch(localhost/3000/getAlgo, method get)
 * fetch(url, method post)
 * fetch(url, method delete)
 * fetch(url, method update)
 */