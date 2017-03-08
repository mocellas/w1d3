var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },

  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },

  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var res = {};

function calculateSalesTax(companiesSalesData, taxRates) {
    for (var company in companiesSalesData) {
        res[companiesSalesData[company].name] = {
            totalSales : calculateCompanySales(companySalesData[company].name,companySalesData[company].sales),
            totalTaxes : calculateCompanyTaxes(companySalesData[company].name,companySalesData[company].province, companySalesData[company].sales)
        }
    }
    return res;
}

function calculateCompanySales(company,sales) {
    var totalSales = res.hasOwnProperty(company) ? res[company].totalSales : 0;
    for (var i = 0; i < sales.length; i++)
        totalSales += sales[i];
    return totalSales;
}
function calculateCompanyTaxes(company, province, sales) {
    var provinceTax = salesTaxRates[province];
    var totalAmountOfTaxes = res.hasOwnProperty(company) ? res[company].totalTaxes : 0;
    for (var i = 0; i < sales.length; i++)
        totalAmountOfTaxes += sales[i] * provinceTax;
    return totalAmountOfTaxes;
}

var final = calculateSalesTax(companySalesData, salesTaxRates);
console.log (final);



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/