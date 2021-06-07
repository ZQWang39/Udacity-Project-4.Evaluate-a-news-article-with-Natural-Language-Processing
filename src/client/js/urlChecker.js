 export function checkForUrl(URL) {
    const regular = /^(https:|http:|www\.)\S*/gm;
    const regex = new RegExp(regular);
    return regex.test(URL);

}

