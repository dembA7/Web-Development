exports.getInicio = (request, response, next) => {
    response.render('inicio', {
        titulo: 'Grupo LOAN'
    });
};

exports.getServicios = (request, response, next) => {
    response.render('servicios', {
        titulo: 'Grupo LOAN'
    });
};

// exports.getCotizacion = (request, response, next) => {
//     response.render('cotizacion', {
//         titulo: 'Grupo LOAN'
//     });
// };