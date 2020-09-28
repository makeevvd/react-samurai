export let required = (value) => {
    if (value) return undefined;
    return 'This is required field'
}

export let maxLengthCreator = (length) => (value) => {
    if (value.length > length) {
        return `Max length is ${length} symbols`
    }
    return undefined;
}