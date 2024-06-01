using Moq;
namespace ZadanieMoq.Tests
{
    [TestClass]
    public class CalculatorTests
    {
        [TestMethod]
        public void Multiply_ShouldSendDataToWebService()
        {
            // Arrange
            Mock<IWebService> webServiceMock = new Mock<IWebService>();
            Calculator calculator = new Calculator(webServiceMock.Object);

            // Act
            int result = calculator.Multiply(5, 10);

            // Assert
            Assert.AreEqual(50, result);

            // Verify that the SendData method was called with the expected argument
            webServiceMock.Verify(ws => ws.SendData("Multiply operation: 5 * 10 = 50"), Times.Once);
        }
    }
}