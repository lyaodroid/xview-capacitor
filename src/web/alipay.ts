import { registerWebPlugin, WebPlugin } from '@capacitor/core';
import { AliPayPlugin } from '../xview-plugin-definitions';


export class AliPayWeb extends WebPlugin implements AliPayPlugin {
  constructor() {
    super({
      name: 'AliPay',
      platforms: ['web']
    });

  }

  async login(options: any): Promise<any> {
    console.log('ECHO', options);
    return AliPay.login({aliLogin:"string"});
  }

  
  /**
   * value false时 code 为官方 resultStatus
   * @param options 
   */
  async pay(options: any): Promise<{value: boolean,code?:string}> {
    console.log('ECHO', options);
    return AliPay.pay({aliPay: "string"});
  }
}

const AliPay = new AliPayWeb();

export { AliPay };

registerWebPlugin(AliPay);
