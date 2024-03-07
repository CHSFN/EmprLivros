using System.Data.Entity.Core.Common.CommandTrees;
using EmprLivros.Data;
using EmprLivros.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmprLivros.Controllers
{
    public class EmprestimoController : Controller
    {
        readonly private ApplicationDbContext _db;

        public EmprestimoController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {  

            IEnumerable<EmprestimosModel> emprestimos = _db.Emprestimos;

            return View(emprestimos);
        }
        
        public IActionResult Cadastrar()
        {  
            return View();
        }
    }
}