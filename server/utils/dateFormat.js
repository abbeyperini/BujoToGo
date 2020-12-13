const formats = {
    weeklyFormat
};

function weeklyFormat() {
    const todayBeg = new Date().setHours(0, 0, 0, 0);
    const day = new Date().getDay();

    switch(day) {
        case 0:
            let sunStart = new Date((todayBeg.valueOf() - (86400000 * 6)));
            let sunEnd = new Date().setHours(24, 0, 0, 0);
            return {start: sunStart, end: sunEnd}
        case 1:
            let monStart = todayBeg;
            let monEnd = new Date((todayBeg.valueOf() + (86400000 * 6)));
            return {start: monStart, end: monEnd}
        case 2:
            let tueStart = new Date((todayBeg.valueOf() - 86400000));
            let tueEnd = new Date((todayBeg.valueOf() + (86400000 * 5)));
            return {start: tueStart, end: tueEnd}
        case 3:
            let wedStart = new Date((todayBeg.valueOf() - (86400000 * 2)));
            let wedEnd = new Date((todayBeg.valueOf() + (86400000 * 4)));
            return {start: wedStart, end: wedEnd}
        case 4:
            let thuStart = new Date((todayBeg.valueOf() - (86400000 * 3)));
            let thuEnd = new Date((todayBeg.valueOf() + (86400000 * 3)));
            return {start: thuStart, end: thuEnd}
        case 5:
            let friStart = new Date((todayBeg.valueOf() - (86400000 * 4)));
            let friEnd = new Date((todayBeg.valueOf() + (86400000 * 2)));
            return {start: friStart, end: friEnd}
        case 6:
            let satStart = new Date((todayBeg.valueOf() - (86400000 * 5)));
            let satEnd = new Date((todayBeg.valueOf() + (86400000 * 1)));
            return {start: satStart, end: satEnd}
    }
}

module.exports = formats;