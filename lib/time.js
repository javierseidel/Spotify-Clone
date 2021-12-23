export function miliToMin(mili) {
    const min = Math.floor(mili / 60000)
    const sec = ((mili % 60000) / 1000).toFixed(0)
    return sec == 60 ? min + 1 + ":00" : min +":" + (sec < 10 ?"0" : "") + sec
}