/**
 * function setTimeout(
 * handler: TimerHandler,
 *  timeout?: number | undefined,
 *  ...arguments: any[]): number
 */
setTimeout((num1,num2)=>{
    console.log(num1,num2);
},2000,10,20)