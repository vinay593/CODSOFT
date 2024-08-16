let calculator = {
    displayValue: '',
    firstOperand: null,
    operator: null,
    secondOperand: null,
  
    init: function() {
      let buttons = document.querySelectorAll('button[type="button"]');
      buttons.forEach(button => {
        button.addEventListener('click', this.handleClick.bind(this));
      });
    },
  
    handleClick: function(event) {
      let value = event.target.value;
  
      if (value === 'C') {
        this.clear();
      } else if (value === '=') {
        this.calculate();
      } else if (['+', '-', '*', '/'].includes(value)) {
        this.setOperator(value);
      } else {
        this.appendValue(value);
      }
  
      document.getElementById('display').value = this.displayValue;
    },
  
    clear: function() {
      this.displayValue = '';
      this.firstOperand = null;
      this.operator = null;
      this.secondOperand = null;
    },
  
    setOperator: function(operator) {
      if (this.firstOperand === null) {
        this.firstOperand = parseFloat(this.displayValue);
        this.displayValue = '';
      }
      this.operator = operator;
    },
  
    appendValue: function(value) {
      if (value === '.' && this.displayValue.includes('.')) return;
      this.displayValue += value;
    },
  
    calculate: function() {
      if (this.firstOperand === null || this.operator === null) return;
      this.secondOperand = parseFloat(this.displayValue);
      let result = 0;
  
      switch (this.operator) {
        case '+':
          result = this.firstOperand + this.secondOperand;
          break;
        case '-':
          result = this.firstOperand - this.secondOperand;
          break;
        case '*':
          result = this.firstOperand * this.secondOperand;
          break;
        case '/':
          result = this.firstOperand / this.secondOperand;
          break;
      }
  
      this.displayValue = result.toString();
      this.firstOperand = null;
      this.operator = null;
      this.secondOperand = null;
    }
  };
  
  calculator.init();
  