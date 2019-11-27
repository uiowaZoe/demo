using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using demo.Models;
// namespace demo.Controllers
// {
//     public class WholesalerController : Controller
//     {
//         public WholesalerController(){}
//         [HttpGet("/api/get/wholesaler")]
//         public IEnumerable<Wholesaler> GetWholesaler(){
//             return new List<Wholesaler>() {
//                 new Wholesaler(){ Id = 0, Name = "Wholesaler Default"},
//                 new Wholesaler(){ Id = 1, Name = "Wholesaler1"},
//                 new Wholesaler(){ Id = 2, Name = "Wholesaler2"},
//                 new Wholesaler(){ Id = 3, Name = "Wholesaler3"},
//                 new Wholesaler(){ Id = 4, Name = "Wholesaler4"}
//             };
//         }
//     }
// }
namespace demo.Controllers
{
    public class ReceivableAccountController : Controller
    {
        public ReceivableAccountController(){}
        [HttpGet("/api/get/receivableaccount")]
        public IEnumerable<ReceivableAccount> GetReceivableAccount(){
            return new List<ReceivableAccount>() {
                new ReceivableAccount(){ Id = 0, CardNumber = "Chase Namei 2669", CardHolder = "Tuniu Network"},
                new ReceivableAccount(){ Id = 1, CardNumber = "Chase Namei 5912", CardHolder = "Namei Inc."},
                new ReceivableAccount(){ Id = 2, CardNumber = "Chase OTT 3165", CardHolder = "OTT Inc."},
                new ReceivableAccount(){ Id = 3, CardNumber = "Chase C&C 5630", CardHolder = "C&C Inc."}
            };
        }

        // [HttpGet("/api/update/receivableaccount")]
        // public IEnumerable<PaymentMethod> UpdateReceivableAccount(int id, string name, string info){
        //     var curList = GetReceivableAccount();
        //     // curList.foreach
        //     // return new List<PaymentMethod>() {
        //     //     new PaymentMethod(){ Id = 0, Name = "NON-CC"},
        //     //     new PaymentMethod(){ Id = 1, Name = "CC"},
        //     //     new PaymentMethod(){ Id = 2, Name = "MCO"}
        //     // };
        // }

        // [HttpGet("/api/del/receivableaccount")]
        // public IEnumerable<PaymentMethod> DelReceivableAccount(int Id){
        //     // return new List<PaymentMethod>() {
        //     //     new PaymentMethod(){ Id = 0, Name = "Check"},
        //     //     new PaymentMethod(){ Id = 1, Name = "Wiremoney"},
        //     //     new PaymentMethod(){ Id = 2, Name = "Remit"},
        //     //     new PaymentMethod(){ Id = 3, Name = "Chase QuickPay"},
        //     //     new PaymentMethod(){ Id = 4, Name = "AliPay"},
        //     //     new PaymentMethod(){ Id = 5, Name = "WechatPay"},
        //     //     new PaymentMethod(){ Id = 6, Name = "Cash"}
        //     // };
        // }

        // [HttpGet("/api/add/receivableaccount")]
        // public IEnumerable<PaymentMethod> AddReceivableAccount(){
        //     // return new List<PaymentMethod>() {
        //     //     new PaymentMethod(){ Id = 0, Name = "Check"},
        //     //     new PaymentMethod(){ Id = 1, Name = "Wiremoney"},
        //     //     new PaymentMethod(){ Id = 2, Name = "Remit"},
        //     //     new PaymentMethod(){ Id = 3, Name = "Chase QuickPay"},
        //     //     new PaymentMethod(){ Id = 4, Name = "AliPay"},
        //     //     new PaymentMethod(){ Id = 5, Name = "WechatPay"},
        //     //     new PaymentMethod(){ Id = 6, Name = "Cash"}
        //     // };
        // }
    }
}