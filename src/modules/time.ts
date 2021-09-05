const twoDigits = (d) => {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
}
export const setCurrentData = (year: number, month: number, date: number, hour: number = 0, minute: number = 0, second: number = 0) => {
    const dateOBJ = new Date();
    dateOBJ.setFullYear(year)
    dateOBJ.setMonth(month - 1)
    dateOBJ.setDate(date)
    dateOBJ.setHours(hour)
    dateOBJ.setMinutes(minute)
    dateOBJ.setSeconds(second)
    return dateOBJ.getFullYear() + "-" + twoDigits(1 + dateOBJ.getMonth()) + "-" + twoDigits(dateOBJ.getDate()) + " " + twoDigits(dateOBJ.getHours()) + ":" + twoDigits(dateOBJ.getMinutes()) + ":" + twoDigits(dateOBJ.getSeconds());
}