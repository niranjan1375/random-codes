// const answer = [];  // 1st method

// const recFun = (number1, stri = '') => {
// 	const str = number1.split('');

// 	str.forEach((num) => {
// 		const remainArray = str.filter((s) => s !== num);

// 		if (remainArray.length === 1) {
// 			answer.push(`${stri}${num}${remainArray[0]}`);
// 		}

// 		const res = recFun(remainArray.join(''), `${stri}${num}`);

// 		return res;
// 	});
// };

let a = 0;

const recuFun = (number1, stri) => {   // 2nd method
	a += 1;

	return number1.split('').reduce((acc, num, index, str) => {
		const remainArray = str.filter((s) => s !== num);

		if (remainArray.length === 1) {
			// answer.push(`${stri}${num}${remainArray[0]}`);

			return [...acc, `${stri}${num}${remainArray[0]}`];
		}

		// const res = recuFun(remainArray.join(''), `${stri}${num}`);

		recuFun(remainArray.join(''), `${stri}${num}`).forEach((res) => {
			acc.push(res);
		});

		return acc;
	}, []);
};

console.log(recuFun('12', ''), a);
