import data from './data.json' assert {type: 'json'};

const icons = document.querySelectorAll('.icon');
const categories = document.querySelectorAll('.category');
const marks = document.querySelectorAll('.marks');


for (let index = 0; index < data.length; index++) {

    icons[index].setAttribute("src", data[index]["icon"])
    categories[index].innerHTML = data[index]["category"]
    marks[index].innerHTML = data[index]["score"]

}