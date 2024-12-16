const recuFun = (number1, stri, m) => number1.split('').reduce((acc, num, index, str) => {
	const remainArray = str.filter((s, ind) => ind !== index);

	if (remainArray.length === 1) {
		if (!(Number(`${stri}${num}${remainArray[0]}`) % m)) {
			return [...new Set([...acc, Number(`${stri}${num}${remainArray[0]}`)])];
		}
		return acc;
	}

	recuFun(remainArray.join(''), `${stri}${num}`, m).forEach((res) => {
		if (!(Number(res) % m) && !acc.includes(res)) {
			acc.push(Number(res));
		}
	});

	return acc;
}, []);

console.log(recuFun('120', '', 12), a);
