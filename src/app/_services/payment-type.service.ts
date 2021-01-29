import { PaymentType } from "../_model/payment-type";

export class PaymentTypeService{
    paymentTypes:PaymentType[]=[
        {id:1,name:'Direct BankTransfare'},
        {id:2,name:'Cheque Paymen'},
        {id:3,name:'Paypal'},
        {id:4,name:'Visa'},
        {id:5,name:'Mastercard'},
        {id:6,name:'On Dilivery'},
    ];
    getAllPayments():PaymentType[]{
        return this.paymentTypes.slice();

    }
 constructor(){}   
}