var Calculadora = {
    adicionar: function(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }

        return num1 + num2;
    },

    subtrair: function(num1, num2) {
        if (isNaN(num1)) {
            return 0
        }

        return num1 - num2;
    },

    dividir: function(num1, num2) {
        if (num2 == 0) {
            return 'Erro'
        }

        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }
        return num1 / num2
    },
    multiplicar: function(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return 0
        }
        return num1 * num2;
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}