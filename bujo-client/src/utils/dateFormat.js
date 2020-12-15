export const formats = {
    ISOstring,
    fromISOstring,
    todayDate,
    formatTime
}

function ISOstring(date, time) {
    return date + "T" + time + ":00";
}

function fromISOstring(string) {
    let array = string.split('T');
    let date = array[0];
    let time = array[1].substring(0, 5);
    return {date: date, time: time}
}

function todayDate() {
    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[d.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[d.getDay()];
    let date = d.getDate();
    let weekNum = getWeekOfMonth(d)
    return {month: month, day: day, date: date, weekNum: weekNum}
}

// https://stackoverflow.com/questions/3280323/get-week-of-the-month
const getWeekOfMonth = (date) => {
    let month = date.getMonth()
    let year = date.getFullYear()
    let firstWeekday = new Date(year, month, 1).getDay()
    let lastDateOfMonth = new Date(year, month + 1, 0).getDate()
    let offsetDate = date.getDate() + firstWeekday - 1
    let index = 1
    let weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
    let week = index + Math.floor(offsetDate / 7)

    if (date || week < 2 + index) return week;
    return week === weeksInMonth ? index + 5 : week;
}

function formatTime(isoString) {
    let date = new Date(isoString)
    let corrected = date.valueOf() + 18000000
    let final = new Date(corrected)
    return final.toLocaleTimeString('en', { timeStyle: 'short' } );
}