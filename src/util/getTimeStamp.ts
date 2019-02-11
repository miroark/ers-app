const getTimestamp = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hh24 = today.getUTCHours();
    let mi = today.getMinutes();
    let ss = today.getSeconds();
    let day;
    let month;
    let hours;
    let minutes;
    let seconds;

    if (dd < 10) {
        day = day = '0' + dd;
    } else {
        day = dd;
    }
        
    if (mm < 10) {
        month = '0' + mm;
    } else {
        month = mm;
    }

    if (hh24 < 10) {
        hours = '0' + hh24;
    } else {
        hours = hh24;
    }

    if ( mi < 10) {
        minutes = '0' + mi;
    } else {
        minutes = mi;
    }
        
    if (ss < 10) {
        seconds= '0' + ss;
    } else {
        seconds = ss;
    }

    let date = yyyy + '-' + month + '-' + day;
    let time = hours + ':' + minutes + ':' + seconds;
    let stamp = date + ' ' + time;
    
    return stamp;
}

export default getTimestamp;