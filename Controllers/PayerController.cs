using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using demo.Models;

namespace demo.Controllers
{
    public class PayerController : Controller
    {
        public PayerController(){}
        [HttpGet("/api/get/payer")]
        public IEnumerable<Payer> GetPayer(){
            return new List<Payer>() {
                new Payer(){ Id = 0, Name = "Payer Default"},
                new Payer(){ Id = 1, Name = "Payer1"},
                new Payer(){ Id = 2, Name = "Payer2"},
                new Payer(){ Id = 3, Name = "Payer3"},
                new Payer(){ Id = 4, Name = "Payer4"}
            };
        }
    }
}