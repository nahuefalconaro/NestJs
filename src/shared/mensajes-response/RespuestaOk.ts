export class RespuestaOk{

    private msg: String;
    private code: Number;
    private response: Object;

    constructor(response: Object, msg: String, code?:Number){
        this.response = response;
        this.msg = msg;
        this.code = code;
    }
}