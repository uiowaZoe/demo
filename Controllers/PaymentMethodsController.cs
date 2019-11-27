using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using demo.Models;

namespace demo.Controllers
{
    public class PaymentMethodsController : Controller
    {
        // public WholesalerController(){}
        // public PaymentMethodsController(){}
        [HttpGet("/api/get/base/paymentmethod")]
        public IEnumerable<PaymentMethod> GetBasePaymentMethod(){
            return new List<PaymentMethod>() {
                new PaymentMethod(){ Id = 0, Name = "Check", Info = "Pay with checks"},
                new PaymentMethod(){ Id = 1, Name = "Cash", Info = "Immediately cash payment"},
                new PaymentMethod(){ Id = 2, Name = "Customer Card", Info = "Customer's personal card"},
                new PaymentMethod(){ Id = 3, Name = "Company Card", Info = "Use company card"}
            };
        }

        [HttpGet("/api/get/sell/paymentmethod")]
        public IEnumerable<PaymentMethod> GetSellPaymentMethod(){
            return new List<PaymentMethod>() {
                new PaymentMethod(){ Id = 0, Name = "NON-CC", Info = "Including Check/Wiremoney/remit ..."},
                new PaymentMethod(){ Id = 1, Name = "CC", Info = "Airline company get the money"},
                new PaymentMethod(){ Id = 2, Name = "MCO", Info = "Operate by sales person"}
            };
        }

        [HttpGet("/api/get/sell/noncc/paymentmethod")]
        public IEnumerable<PaymentMethod> GetSellNonCCPaymentMethod(){
            return new List<PaymentMethod>() {
                new PaymentMethod(){ Id = 0, Name = "Check"},
                new PaymentMethod(){ Id = 1, Name = "Wiremoney"},
                new PaymentMethod(){ Id = 2, Name = "Remit"},
                new PaymentMethod(){ Id = 3, Name = "Chase QuickPay"},
                new PaymentMethod(){ Id = 4, Name = "AliPay"},
                new PaymentMethod(){ Id = 5, Name = "WechatPay"},
                new PaymentMethod(){ Id = 6, Name = "Cash"}
            };
        }
    }
}