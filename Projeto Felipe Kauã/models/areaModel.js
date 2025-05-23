exports.calcularArea = (base, altura) => {

    if (base <= 0 || altura <= 0) {
        return 'Base e altura devem ser maiores que zero.';
    }
    else{
        return base * altura;
    }

};S