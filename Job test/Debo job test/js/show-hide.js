/*================================================================================
|*The class below is uses to display and hide sruffs on the page in different ways |====================================
|*If the stuff to be displayed is to be displayed as a css "block", then the showStuffs() method of the class is called|===
|*If the stuff to be displayed is to be displayed as a css "flex", then the showFlexStuffs() method of the class is called|===============
|*If an element is to be hidden on the page, either it was displayed as "flex", or "block" the hideStuffs() method of the class is called|
========================================================================================================================================
*/
class displayStatus{
	/* The showStuffs() method displays stuffs as a "block" css style  */
	static showStuffs(stuff){
		stuff.style.display = "block";
	}
	/* The showFlexStuffs() method displays stuffs as a "flex" css style  */
	static showFlexStuffs(stuff){
		stuff.style.display = "flex";
	}
	static hideStuffs(stuff){
		stuff.style.display = "none";
	}
	/* The showInlineBlockStuffs() method displaylays stuffs as a "inline-css" css style  */
	static showInlineBlockStuffs(){
		stuff.style.display = "inline-block";
	}
}