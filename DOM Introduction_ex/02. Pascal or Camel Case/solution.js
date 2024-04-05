// 01
function solve() {
	const textInputElement = document.getElementById('text');
	const namingConvInputElement = document.getElementById('naming-convention');
	const outputFieldElement = document.getElementById('result');

	const textValue = textInputElement.value;
	const namingConvValue = namingConvInputElement.value;

	const pascalCaseConvertor = (text) =>
		text
			.split(' ')
			.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
			.join('');

	mapperFunctions = {
		'Pascal Case': pascalCaseConvertor,
		'Camel Case': (text) => 
			pascalCaseConvertor(text)[0].toLowerCase() + pascalCaseConvertor(text).slice(1),
	}

	if (!mapperFunctions.hasOwnProperty(namingConvValue)) {
		outputFieldElement.textContent = 'Error!';
		return;
	}

	outputFieldElement.textContent = mapperFunctions[namingConvValue](textValue);
}

// 02
function solve() {
	const textValue= document.getElementById('text').value;
	const namingConventionValue = document.getElementById('naming-convention').value;
	const outputFieldElement = document.getElementById('result');

	function pascalCaseConvertor(text) {
		const words = text.split(' ');
		let outputResult = '';

		for (let word of words) {
			word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

			outputResult += word;
		}

		return outputResult;
	}

	function camelCaseConvertor(text) {
		return pascalCaseConvertor(text).charAt(0).toLowerCase() + pascalCaseConvertor(text).slice(1);
	}
	
	const mapperFunctions = {
		'Pascal Case': pascalCaseConvertor,
		'Camel Case': camelCaseConvertor,
	}

	if (!mapperFunctions[namingConventionValue]) {
		outputFieldElement.textContent = 'Error!';
	}

	outputFieldElement.textContent = mapperFunctions[namingConventionValue](textValue);
}