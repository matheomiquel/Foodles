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
    words.map(word => {
        data.push({
            word: word,
            count: count[words.indexOf(word)]
        })
    })
    let result = data.sort((a, b) => {
        return a.count - b.count;
    }).reverse();
    result = result.sort((a, b) => {
        if (a.count === b.count) {
            return a - b
        }
    })
    let bool = true;
    while (bool) {
        bool = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i + 1])
                if (data[i].count === data[i + 1].count) {
                    if (data[i].word.localeCompare(data[i + 1].word) > 0) {
                        const tmp = data[i].word;
                        data[i].word = data[i + 1].word;
                        data[i + 1].word = tmp;
                    }
                }
        }
    }
    let string = ""
    for (let i = 0; i < n; i++)
        string += (`${data[i].word} : ${data[i].count}\n`)
    return string
};

export {
    count
};
