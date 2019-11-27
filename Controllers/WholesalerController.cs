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
                new Wholesaler(){ Id = 0, Name = "Wholesaler Default"},
                new Wholesaler(){ Id = 1, Name = "Wholesaler1"},
                new Wholesaler(){ Id = 2, Name = "Wholesaler2"},
                new Wholesaler(){ Id = 3, Name = "Wholesaler3"},
                new Wholesaler(){ Id = 4, Name = "Wholesaler4"}
            };
        }
    }
}