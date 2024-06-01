using Microsoft.VisualStudio.TestPlatform.TestHost;
using System;
using TechTalk.SpecFlow;
using BDDTesty;
using SpecFlowProject1;
using NUnit.Framework;

namespace BDDTesty.SpecFlowProject1.StepDefinitions
{
    [Binding]
    public class CalculatorStepDefinitions
    {
        Calculator Calculator;
        int number1;
        int number2;
        int result;

        [Given(@"the first number is (.*)")]
        public void GivenTheFirstNumberIs(int num1)
        {
            number1 = num1;
        }

        [Given(@"the second number is (.*)")]
        public void GivenTheSecondNumberIs(int num2)
        {
            number2 = num2;
        }

        [When(@"the two numbers are multiplied")]
        public void WhenTheTwoNumbersAreMultiplied()
        {
            Calculator = new Calculator();
            result = Calculator.MultiplyNumbers(number1, number2);
        }

        [Then(@"the result should be (.*)")]
        public void ThenTheResultShouldBe(int p0)
        {
            Assert.AreEqual(p0, result);
        }
    }
}
