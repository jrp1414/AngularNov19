
export class LoggingService{
    SuccessLog(message:string){
        console.log(message);
    }
    ErrorLog(message:string){
        console.error(message);
    }

    WarningLog(message:string){
        console.warn(message);
    }
}