import { Component, OnInit } from '@angular/core';
import { log, pow, sqrt, gamma } from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  input: string = '';

  constructor() {
    this.input = '';
  }

  ngOnInit(): void {}

  pressNum(num: string) {
    if (num == '.') {
      if (this.input != '') {
        if (this.input.indexOf('.') >= 0) return;
      } else {
        this.input = '0';
      }
    }
    if (num == '0') {
      if (this.input == '' || this.input == '0') return;
    }
    this.input = this.input + num;
  }

  pressOperator(op: string) {
    if (this.input != '' && this.operator() == '') {
      if (op == '^') {
        this.input += '^';
      } else {
        this.input = this.calcAnswer(op);
      }
    }
  }

  operator(): string {
    for (const x of ['^', '!', 'ln', '√']) {
      if (this.input.indexOf(x) != -1) return x;
    }
    return '';
  }

  calcAnswer(op: string) {
    if (op == '=') {
      if (this.operator() == '^') {
        const powArray = this.input.split('^');
        return pow(parseFloat(powArray[0]), parseFloat(powArray[1])).toString();
      } else return this.input;
    } else if (op == 'ln') {
      return log(parseFloat(this.input)).toString();
    } else if (op == '!') {
      return gamma(parseFloat(this.input) + 1).toString();
    } else if (op == '√') {
      return sqrt(parseFloat(this.input)).toString();
    }
    return '';
  }

  getAnswer() {
    this.input = this.calcAnswer('=');
  }

  clear() {
    if (this.input != '') {
      this.input = this.input.slice(0, this.input.length - 1);
    }
  }

  allClear() {
    this.input = '';
  }
}
