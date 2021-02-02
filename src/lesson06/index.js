// 1
const diff = (a, b) => (a > b ? a - b : b - a);

diff(3, 2);

// 2
const isWord = (text) => (text.split(" ").length === 1 ? "is word" : "is line");

isWord("afsdfef eyrefd");

// 3
const pow = (a, x) => a ** x;

pow(3, 2);
