import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

// напишем основную логику файла src/main.js с выводом данных из формы в консоль.

//1. получаем нужные нам DOM-элемент
const dateCalcForm = document.getElementById("datecalc");
const dateCalcresult = document.getElementById("datecalc__result");

// 2. прослушка на форму клика и вызов функции
dateCalcForm.addEventListener("submit", handleCalcDates);

//3. устанавливаем обработчик формы
function handleCalcDates(event) {
    dateCalcresult.innerHTML = ""; // по умолчанию пусто поле в html
    event.preventDefault();

    /* Метод event.preventDefault - () используется для отмены стандартного поведения браузера для данного события. 
    В данном случае при отправке формы браузер отправляет данные на сервер и перезагружает страницу*/

    //4. пишем основную логику валидации поля
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

/*event.target — это элемент, который вызвал событие. Это то, что называется эмитентом.
Свойство target можно получить, если событие элемента прослушивается.*/