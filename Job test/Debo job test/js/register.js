//The function beow shows the loader when the page loads and shows it for just 3 seconds
setTimeout(function(){showIt()}, 3000);
function showIt(){
	const loader = document.querySelector('#loader_container');
	const registeredContainer = document.querySelector('#registeredContainer');
	displayStatus.hideStuffs(loader);
	displayStatus.showFlexStuffs(registeredContainer);
}