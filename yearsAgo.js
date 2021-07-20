function yearsAgo(howManyYearsAgo) {
    const year = new Date();
    return year.getFullYear() - howManyYearsAgo;
}