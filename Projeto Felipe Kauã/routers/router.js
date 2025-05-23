const http = require('http');
const url = require('url');
const areaController = require('../controllers/areaControll');
module.exports = (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //res.write('Olá, ' + req.url + '!\n');

    if (pathName == '/index') {
        areaController
    } else if (pathName == '/calcular-area') {
        areaController.calcularArea(req, res, query);
    } else if (pathName == '/autor') {
        areaController.autor(req, res);
    } else {
        res.end('<h1>404 - Página não encontrada.</h1>')
    }

    res.end();

}