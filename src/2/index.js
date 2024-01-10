const ape = [1, 2, 3, 2, 42, 5, 2, 42, 452, 5, 2, 5, 2, 3, 2, 42, 5, 2];

const c = ape.reduce((acc = [], curr) => {
	const latestArrayIndex = acc.length - 1;
	if (acc.length === 0) {
		return [...acc, [curr]];
	}

	const lastArray = acc[latestArrayIndex];
	const lastArrayLength = lastArray.length;

	if (lastArrayLength === 0 || lastArray[lastArrayLength - 1] < curr) {
		acc[latestArrayIndex] = [...lastArray, curr];
		return acc;
	}

	if (lastArray[lastArrayLength - 1] > curr) {
		return [...acc, [curr]];
	}

	return acc;
}, []);

const findLargestArray = (arrays) => {
	return arrays.reduce((largest, current) => {
		return current.length > largest.length ? current : largest;
	}, []);
};

console.log('c', findLargestArray(c).length);
