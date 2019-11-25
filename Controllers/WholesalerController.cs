using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using demo.Models;

namespace demo.Controllers
{
    public class WholesalerController : Controller
    {
        public WholesalerController(){}
        [HttpGet("/api/get/wholesaler")]
        public IEnumerable<Wholesaler> GetWholesaler(){
            return new List<Wholesaler>() {
                new Wholesaler(){ id = 0, Name = "Wholesaler Default"},
                new Wholesaler(){ id = 1, Name = "Wholesaler1"},
                new Wholesaler(){ id = 2, Name = "Wholesaler2"},
                new Wholesaler(){ id = 3, Name = "Wholesaler3"},
                new Wholesaler(){ id = 4, Name = "Wholesaler4"}
            };
        }
    }
}