// function add_item(){
//     let item= document.getElementById('box');
//     list_item=document.getElementById('listview');

//     if(item.value !=""){
//         let make_li=document.createElement('li');
//         make_li.appendChild(document.createTextNode(item.value));
//         list_item.appendChild(make_li);
//         item.value=""
//     }
//     else{
//         alert("Task can not be empty");
//     }
// }

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
	if (inputBox.value === ""){
		alert("Please enter some task!!!");
	}else{
		let li=document.createElement("li");
		li.innerHTML=inputBox.value;
		listContainer.appendChild(li);
		let span=document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
		const currentCount = parseInt(localStorage.getItem('count'));
		const newCount = currentCount + 1;
		updateCounterValue(newCount);
		saveData()
	}
	inputBox.value="";

}


listContainer.addEventListener("click", function(e){
	if (e.target.tagName==="LI"){
		e.target.classList.toggle("checked");
		saveData()
	}else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		const currentCount = parseInt(localStorage.getItem('count'));
		const newCount = Math.max(currentCount - 1, 0); // Ensure count doesn't go below 0
		updateCounterValue(newCount);
		saveData();

	}
},false)

function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}
function updateCounterValue(value) {
	localStorage.setItem('count', value.toString());
	document.getElementById('number_of_task').textContent = value;
}
const initialCount = parseInt(localStorage.getItem('count')) || 0;
updateCounterValue(initialCount);
function showData(){
	listContainer.innerHTML=localStorage.getItem("data");
}
showData();