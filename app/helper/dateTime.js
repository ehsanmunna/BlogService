
function formatDate(dateString){
    const date = new Date(dateString);
    return {
        dateOnly: date.toISOString().split('T')[0]
    }
}

module.exports = {
    formatDate: formatDate
}