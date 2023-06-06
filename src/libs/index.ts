

const getCountTime = () => {
    
    const countTime = window.localStorage.getItem('countTime')
    if (countTime) return parseInt(countTime)
    return 0
}

export {
    getCountTime
}