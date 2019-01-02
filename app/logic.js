
var app = app || {};
app.dom = {};

app.init = function(){
	app.setupDOM();
	app.addListeners();
}


app.setupDOM = function(){
	app.dom.search = document.getElementById('search');
	app.dom.submitBtn = document.getElementById('submitBtn');
	app.resultContainer = document.getElementById('resultContainer');
}

app.addListeners = function(){
	app.dom.submitBtn.addEventListener('click', function(){
		app.resultContainer.innerHTML = "";
		app.getRecipe();
	});
}


app.getRecipe = function(){
	console.log('getting recipes...');
	var searchResult = "q=" + app.dom.search.value;
	app.recipes = httpGet(searchResult);
	console.log(app.recipes);
	for(var i = 0; i < app.recipes.hits.length; i++)
	{
		console.log(app.recipes.hits[i].recipe.label);
		app.createElement(app.recipes.hits[i].recipe.label);
	}

}



function httpGet(userSearch)
{
	//var url goes here
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

app.createElement = function(item){
	var recipe = document.createElement('div');
	recipe.setAttribute('class', 'recipe');
	recipe.innerHTML = item;
	app.resultContainer.appendChild(recipe);
}



app.init();