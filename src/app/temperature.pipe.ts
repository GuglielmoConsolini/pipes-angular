import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'temp',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {

    transform(
        value: string | number |null,
        inputType: 'cel' | 'fah',
        outputType?: 'cel' | 'fah',
    ) {

        if (value === null) {
            return value;
        }

        let val: number;
        let outputTemp: number;

        if (typeof value === 'string') {
            val = parseFloat(value) 
        } else {
            val = value !== null ? value : 0;
        };

        if (inputType === 'cel' && outputType === 'fah') {
             outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (9 / 5);
        } else {
            outputTemp = val;
        }

        let symbol: '°C' | '°F';

        if (outputType!) {
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        };

        

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }

}