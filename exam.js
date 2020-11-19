const count = function (sentence, n) {
    const data = [];
    let words = [];
    let count = [];
    sentence.split(' ').map(word => {
        if (words.includes(word)) {
            count[words.indexOf(word)]++;
        } else {
            words.push(word);
            count.push(1);
        }
    })
    words.map((word, index) => {
        data.push({
            word: word,
            count: count[words.indexOf(word)]
        })
    })
    let string = ""
    let result = data.sort((a, b) => {
        return a.count - b.count;
    }).reverse();
    result = result.sort((a, b) => {
        if (a.count === b.count) {
            return a - b
        }
    })
    for (let i = 0; i < n; i++)
        string += (`${data[i].word} : ${data[i].count}\n`)
    return string
};

export {
    count
};
