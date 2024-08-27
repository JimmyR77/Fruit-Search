const input = document.querySelector('#search-container');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


/** Filters through the fruit array and returns suggestions based on input value that is entered*/

function search(str) {
	return fruit.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase()));

}
/** Displays list of suggestions under searchbox */
const searchHandler = (event) => {
	const inputVal = event.target.value;
	const filteredFruit = search(inputVal);
	showSuggestions(filteredFruit,inputVal);
	
};
/** Displays filtered suggestions based on input of the search box */
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
/**when the value of the searchbox is empty, suggestion list gets cleared and shows empty searchbox  */
	if (inputVal === ""){
		return;
	}
	/**Displays drop down of suggestions */
	results.forEach((fruit) => {
		const li = document.createElement('li');
		li.innerText = fruit;
		suggestions.appendChild(li);
	});
	// /**When list of suggetions is shown, the background color is also shown in order to mimic look of drop down list*/
	if (results.length > 0) {
		suggestions.classList.add('show-background')
	} else {
		suggestions.classList.remove('show-background')
	}
}
/**Populates the search bar with chosen fruit/suggestion */
function useSuggestion(event) {
	input.value = event.target.innerHTML;
	suggestions.innerHTML = "";
};

/**Event listeners*/
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);