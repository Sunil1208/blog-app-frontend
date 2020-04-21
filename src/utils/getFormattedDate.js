const getFormattedDate = date => {
    return new Date(Date.parse(date).toLocaleString("en-US"),
    {dateStyle:"long"})
}

export default getFormattedDate;