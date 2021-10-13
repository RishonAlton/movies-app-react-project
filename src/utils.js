const formatTime = (time) => {

    return `${Math.floor(time / 60)}h ${(time % 60)}m`

}


const formatPrice = (price) => {

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    }).format(price)

}


export {

    formatTime,
    formatPrice

}