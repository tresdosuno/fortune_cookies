const getRandomQuote = (elements) => {
    const i = Math.floor(Math.random() * elements.length)
    return elements[i]
}

export default getRandomQuote