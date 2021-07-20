function mostProfitableDepartment(salesData) {
    const dataMap = {};
    for (var i = 0; i < salesData.length; i++) {
        const dataSales = salesData[i];
        dataMap[dataSales.department] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
        const dataSales = salesData[i];
        var currentDepartment = dataMap[dataSales.department];
        currentDepartment += dataSales.sales;
        dataMap[dataSales.department] = currentDepartment
    }

    var currentMaxixumSales = 0;
    var currentDepartment = "";

    for (var dataSalesDepartment in dataMap) {
        const currentDataDepartmentSales = dataMap[dataSalesDepartment];
        if (currentDataDepartmentSales > currentMaxixumSales) {
            currentMaxixumSales = currentDataDepartmentSales;
            currentDepartment = dataSalesDepartment;
        }
    }
    return currentDepartment;
}
//------------------------------------------------------------------------------
function mostProfitableDay(salesData) {
    const dataMap = {};
    for (var i = 0; i < salesData.length; i++) {
        const dataSales = salesData[i];
        dataMap[dataSales.day] = 0;
    }

    for (var i = 0; i < salesData.length; i++) {
        const dataSales = salesData[i];
        var currentDay = dataMap[dataSales.day];
        currentDay += dataSales.sales;
        dataMap[dataSales.day] = currentDay
    }

    var currentMaxixumSales = 0;
    var currentDay = "";

    for (var dataSalesDay in dataMap) {
        const currentDataDaySales = dataMap[dataSalesDay];
        if (currentDataDaySales > currentMaxixumSales) {
            currentMaxixumSales = currentDataDaySales;
            currentDay = dataSalesDay;
        }
    }
    return currentDay;
}