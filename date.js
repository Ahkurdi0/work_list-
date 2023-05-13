
function day() {
    let today = new Date();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let format = (today.toLocaleString("en-US", options)); // Saturday, September 17, 2016

    return format;
}



module.exports = day();