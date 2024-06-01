using Microsoft.VisualStudio.TestTools.UnitTesting;
using TDDTests; 
using static TDDTests.Program;

namespace Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Calculator calc = new Calculator();
            int a = 10;
            int b = 5;

            // Act
            int result = calc.Multiply(a, b);

            // Assert
            Assert.AreEqual(50, result);
        }
    }
}