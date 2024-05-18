document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const motivo = document.getElementById("motivo").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.querySelector("textarea").value;
        const tipoCliente = document.querySelector("input[name='tipoCliente']:checked").value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const telefonoRegex = /^\d{10}$/;

        if (nombre.trim() === '' || email.trim() === '' || motivo === '' || telefono.trim() === '' || mensaje.trim() === ''|| !tipoCliente) {
            alert("Por favor, completa todos los campos del formulario.");
            console.log(nombre, email, motivo, asunto, mensaje, tipoCliente);
            return;
        }

        if (!email.match(emailRegex)) {
            alert("Por favor, introduce un email válido.");
            return;
        }

        if (!telefono.match(telefonoRegex)) {
            alert("Por favor, introduce un número de teléfono válido (10 dígitos).");
            return;
        }
        console.log(nombre, email, motivo, telefono, mensaje, tipoCliente);
        form.reset();
        alert("Formulario enviado correctamente.");
    });
});

// function validateForm(e) {
//             e.preventDefault();

//         const nombre = document.getElementById("nombre").value;
//         const email = document.getElementById("email").value;
//         const motivo = document.getElementById("motivo").value;
//         const telefono = document.getElementById("telefono").value;
//         const mensaje = document.querySelector("textarea").value;
//         const tipoCliente = document.querySelector("input[name='tipoCliente']:checked").value;

//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         const telefonoRegex = /^\d{10}$/;

//         if (nombre.trim() === '' || email.trim() === '' || motivo === '' || telefono.trim() === '' || mensaje.trim() === ''|| !tipoCliente) {
//             alert("Por favor, completa todos los campos del formulario.");
//             console.log(nombre, email, motivo, asunto, mensaje, tipoCliente);
//             return;
//         }

//         if (!email.match(emailRegex)) {
//             alert("Por favor, introduce un email válido.");
//             return;
//         }

//         if (!telefono.match(telefonoRegex)) {
//             alert("Por favor, introduce un número de teléfono válido (10 dígitos).");
//             return;
//         }
//         console.log(nombre, email, motivo, telefono, mensaje, tipoCliente);
//         document.getElementById("myForm").reset();
//         alert("Formulario enviado correctamente.");
//         return true;
// }

// export { validateForm }