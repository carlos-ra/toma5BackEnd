'use strict';
var fs = require('fs');

module.exports = function(User) {
    // send password reset link when requested
  User.on('resetPasswordRequest', function(info) {

      //var html = 'Por favor de clic <a href="' + 'http://127.0.0.1/#/cambiar_contrasena?access_token=' +
      //          info.accessToken.id + '">aquí</a> para asignar nueva clave';

      var html = '<!DOCTYPE html> <html lang="en"> <head> <title>password reset</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> * { box-sizing: border-box; } body { font-family: Arial, Helvetica, sans-serif; } .container {text-align: center; width: 50%; } header { background-color: #F5F5F5; padding: 1px; text-align: center; font-size: 20px; color: #212F3C; } article { -webkit-flex: 3; -ms-flex: 3; flex: 3; font-size: 18px; padding: 10px; color: #212F3C; } .button { background-color: #1A5276; color: white; border: 2px solid #708090; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; padding: 12px 28px; width: 60%; } footer { background-color: #F5F5F5; padding: 10px; text-align: center; color: #212F3C; } @media (max-width: 600px) { section { -webkit-flex-direction: column; flex-direction: column; } } </style> </head> <body> <div class="container"> <header> <img src="http://52.27.253.172/img/logoFenosa.png" height="70" width="135"> <p>PPO SISTEMA DE GESTION DE OBRAS</p> </header> <section> <article> <h1>¿Cambiar contraseña?</h1> <p> Se ha solicitado un cambio de contraseña para ' + info.email + '</p> <a class="button" href="http://127.0.0.1/#/cambiar_contrasena?access_token=' + info.accessToken.id + '">Cambiar Contraseña</a><br><br> <p> Si no hiciste esta solicitud ignora este email o háznolo saber a <a href="mailto:soporte@sendasvalue.com">soporte@sendasvalue.com</a></p><br> </article> </section> <footer> <p>© 2018 Mensaje enviado automáticamente por Sendas Value</p> </footer> </div> </body> </html>';

      User.app.models.Email.send({
        to: info.email,
        from: 'soporte@sendasvalue.com',
        subject: 'Petición cambio de Clave PPO.',
        html: html,
      }, function(err) {
        if (err) return console.log('> error sending password reset email');
      });
  });
};
