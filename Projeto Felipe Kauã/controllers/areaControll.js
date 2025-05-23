const indexView = require('../views/indexView');
const autorView = require('../Views/autorView');
const resultadoView = require('../Views/resultadoView');

const areaModel = require('../models/areaModel');

exports.index = (req, res) => {
    res.end(indexView());
}

exports.calcularArea = (req, res, query) => {
    const base = query.base;
    const altura = query.altura;
    const area = areaModel.calcularArea(base, altura);

    res.end(resultadoView(area));
}

exports.autor = (req, res) => {
    res.end(autorView());
}