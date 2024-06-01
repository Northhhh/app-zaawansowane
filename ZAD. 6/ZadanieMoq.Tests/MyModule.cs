using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZadanieMoq.Tests
{
    public class Calculator
    {
        private IWebService _webService;

        public Calculator(IWebService webService)
        {
            _webService = webService;
        }

        public int Multiply(int a, int b)
        {
            int result = a * b;
            _webService.SendData($"Multiply operation: {a} * {b} = {result}");
            return result;
        }
    }
}
