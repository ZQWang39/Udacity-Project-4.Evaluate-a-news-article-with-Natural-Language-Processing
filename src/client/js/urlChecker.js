 export function checkForUrl(URL) {
    const regular = /^(https:|http:|www\.)\S*/gm;
    return regular.test(URL)
    // const regex = new RegExp(regular);
    // return regex.test(URL);

}

