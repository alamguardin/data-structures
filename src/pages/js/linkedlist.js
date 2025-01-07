import "../../../style.css";
import LinkedList from "../../structures/linkedList.js";

/* Templates string */
const ActionsNav = () => {
	return `
    <div class="actions">
        <input type="text" class="actions-input" id="actions-input"/>
        <button class="actions-button" id="actions-push">Push</button>
        <button class="actions-button" id="actions-unshift">Unshift</button>
        <button class="actions-button" id="actions-shift">Shift</button>
        <button class="actions-button" id="actions-pop">Pop</button>
    </div>
    `;
};

const Table = (content = "") => {
	return `
    <table class="table">
        <tr class="table-row">
            <th class="table-heading">Prev</th>
            <th class="table-heading">Value</th>
            <th class="table-heading">Next</th>
        </tr>
        ${content}
    </table>
    `;
};

document.querySelector("#app").innerHTML = `
${ActionsNav()}
<div id="data">
    ${Table()}
<div>
`;

const numbers = new LinkedList();

const inputControl = document.querySelector("#actions-input");
const pushButton = document.querySelector("#actions-push");
const unshiftButton = document.querySelector("#actions-unshift");
const shiftButton = document.querySelector("#actions-shift");
const popButton = document.querySelector("#actions-pop");

pushButton.addEventListener("click", () => {
	if (!inputControl.value) {
		return null;
	}

	numbers.push(inputControl.value);
	inputControl.value = "";
	showData();
});

unshiftButton.addEventListener("click", () => {
	if (!inputControl.value) {
		return null;
	}

	numbers.unshift(inputControl.value);
	inputControl.value = "";
	showData();
});

shiftButton.addEventListener("click", () => {
	numbers.shift();
	showData();
});

popButton.addEventListener("click", () => {
	numbers.pop();
	showData();
});

function getDataFromLinkedList(linkedlist) {
	const arr = [];
	let current = linkedlist;

	while (current) {
		const nodeObject = {
			prev: current.prev ? current.prev.data : null,
			value: current.data,
			next: current.next ? current.next.data : null,
		};

		arr.push(nodeObject);
		current = current.next;
	}

	return arr;
}

function showData() {
	const data = getDataFromLinkedList(numbers.head);
	console.log(data);
	let fragment = "";

	for (const item in data) {
		console.log(item);
		fragment += `<tr class="table-row">
            <td class="table-item --prev">${data[item].prev}</td>
            <td class="table-item --value">${data[item].value}</td>
            <td class="table-item --next">${data[item].next}</td>
        </tr>
        `;
	}

	document.querySelector("#data").innerHTML = Table(fragment);
}
