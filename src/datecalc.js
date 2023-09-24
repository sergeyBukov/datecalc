/* напишем функцию расчёта промежутка между датами. Для этого воспользуемся
инструментарием luxon. Так как функция diff возвращает объект, нам также понадобится функция, превращающая его в html */

/* скачаем отдельный файл luxon.js (библиотека для работы с датами): 
https://drive.google.com/file/d/19Atl87wrXAqDC08-iDLnrelV8ZKtV0SU/view */
// можно также установить и из npm: npm install --save luxon
import { DateTime } from "./luxon.js";

/* Меняем даты, если первая дата больше второй. Это нужно, чтобы не появились цифры с минусами.*/

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0];
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}
/* Функция diffToHtml форматирует объект как html. Она имеет вид стрелочки чтобы показать разные варианты экспорта.*/

export const diffToHtml = diff => ` 
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''} 
    </span> 
`;
