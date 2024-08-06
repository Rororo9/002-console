import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import dayjs from 'dayjs';

const args = yargs(hideBin(process.argv))
    .option('date', {
        alias: 'd',
        description: 'Показать текущий день месяца'
    })
    .option('month', {
        alias: 'm',
        description: 'Показать текущий месяц'
    })
    .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'Показать текущий год'
    })
    .parse();

const currentDate = dayjs();

const showCurrentDateInfo = () => {
    if (args.y) {
        console.log("Текущий год:", currentDate.year());
    } else if (args.m) {
        console.log("Текущий месяц:", currentDate.month());
    } else if (args.d) {
        console.log("Дата в календарном месяце:", currentDate.date());
    } else {
        console.log("Текущая дата и время в формате ISO:", currentDate.toISOString());
    }
};

const handleAddOrSubtract = () => {
    if (args.d) {
        if (args._.includes('add')) {
            const updatedDate = currentDate.add(args.d, 'day');
            console.log("Обновленная дата:", updatedDate.toISOString());
        } else if (args._.includes('sub')) {
            const updatedDate = currentDate.subtract(args.d, 'day');
            console.log("Обновленная дата:", updatedDate.toISOString());
        }
    } else if (args.m) {
        if (args._.includes('add')) {
            const updatedMonth = currentDate.add(args.m, 'month');
            console.log("Обновленный месяц:", updatedMonth.toISOString());
        } else if (args._.includes('sub')) {
            const updatedMonth = currentDate.subtract(args.m, 'month');
            console.log("Обновленный месяц:", updatedMonth.toISOString());
        }
    }
};

if (args._.includes('current')) {
    showCurrentDateInfo();
}

if (args._.includes('add') || args._.includes('sub')) {
    handleAddOrSubtract();
}