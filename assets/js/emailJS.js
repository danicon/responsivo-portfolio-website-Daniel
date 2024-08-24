(function () {
    emailjs.init("oR1wjhPKti8SDFzGr"); // Substitua pelo User ID correto
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    emailjs.sendForm('service_9qx5874', 'template_wxkrauw', this)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado com sucesso!');
            document.getElementById('contact-form').reset(); // Limpa os campos do formulário
        }, function (error) {
            console.log('FAILED...', error);
            alert('Erro ao enviar o email.');
        });
});