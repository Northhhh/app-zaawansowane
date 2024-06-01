using Moq;
namespace ZadanieMoq2
{
    [TestClass]
    public class OrderProcessorTests
    {
        [TestMethod]
        public void ProcessOrder_ShouldCallPlaceOrderWithCorrectParameters()
        {
            // Arrange
            Mock<IOrderService> orderServiceMock = new Mock<IOrderService>();
            OrderProcessor orderProcessor = new OrderProcessor(orderServiceMock.Object);

            // Act
            orderProcessor.ProcessOrder("ProductABC", 3);

            // Assert
            // Sprawdzenie, czy metoda PlaceOrder zosta³a wywo³ana dok³adnie raz z odpowiednimi parametrami
            orderServiceMock.Verify(os => os.PlaceOrder("ProductABC", 3), Times.Once);
        }

        [TestMethod]
        public void ProcessOrder_ShouldCallPlaceOrderMultipleTimes()
        {
            // Arrange
            Mock<IOrderService> orderServiceMock = new Mock<IOrderService>();
            OrderProcessor orderProcessor = new OrderProcessor(orderServiceMock.Object);

            // Act
            orderProcessor.ProcessOrder("Product1", 2);
            orderProcessor.ProcessOrder("Product2", 5);

            // Assert
            // Sprawdzenie, czy metoda PlaceOrder zosta³a wywo³ana dwukrotnie z odpowiednimi parametrami
            orderServiceMock.Verify(os => os.PlaceOrder("Product1", 2), Times.Once);
            orderServiceMock.Verify(os => os.PlaceOrder("Product2", 5), Times.Once);
        }
    }
}