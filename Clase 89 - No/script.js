// alert("Holassss")

function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", ()=>{
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $form = qs('#form'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $fecha = qs('#fecha'),
    $fechaErrors = qs('#dateErrors'),
    $sexo = qs('#sexo'),
    $sexErrors = qs('#sexErrors'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,/* caracteres especales */
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,/* email */
    regExPass = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,12}$/;/* Que tenga mayusculas y minusculas */


    
/* 
    $inputName.addEventListener("blur", ()=>{
        switch (true){
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test():
                $nameErrors.innerHTML = "NOmbre Inválido";
                $inputName.classList.add("is-invalid");
                break;
            default:
                $inputName.classList.remove("is-Inválido");
                $inputName.classList.add("Is-valid");
                break
        }
    }) */

    
    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break;
            default: 
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    }),
    $dni.addEventListener("blur", () => {
        switch (true) {
            case !$dni.value.trim():
                $dniErrors.innerHTML = "Requerido";
                $dni.classList.add("is-invalid");
                break;
            case !regExDNI.test($dni.value):
                $dniErrors.innerHTML = "DNI inválido";
                $dni.classList.add("is-invalid");
                break;
            default: 
                $dni.classList.remove("is-invalid");
                $dni.classList.add("is-valid");
                $dniErrors.innerHTML = "";
                break;
        }
    }),
    $email.addEventListener("blur", () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = "Requerido";
                $email.classList.add("is-invalid");
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = "Email inválido";
                $email.classList.add("is-invalid");
                break;
            default: 
                $email.classList.remove("is-invalid");
                $email.classList.add("is-valid");
                $emailErrors.innerHTML = "";
                break;
        }
    }),
    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;    
            default:
                $pass.classList.remove("is-invalid");
                $pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    }),
    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                $pass2.classList.add('is-invalid')
                break;
            case $pass2.value !== $pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;    
            default:
                $pass2.classList.remove("is-invalid");
                $pass2.classList.add('is-valid')
                $pass2Errors.innerHTML = ""
                break;
        }
    }),
    $fecha.addEventListener("blur", () => {
        switch (true) {
            case !$fecha.value.trim():
                $fechaErrors.innerHTML = "Requerido";
                $fecha.classList.add("is-invalid");
                break;
            case moment($fecha.value) > moment():
                $fechaErrors.innerHTML = "Fecha inválida";
                $fecha.classList.add("is-invalid");
                break;
            case moment().diff(moment($fecha.value), "years") < 18:
                $fechaErrors.innerHTML = "Debes tener más de 18 años";
                $fecha.classList.add("is-invalid");
                break;
            default:
                $fecha.classList.remove("is-invalid");
                $fecha.classList.add('is-valid')
                $fechaErrors.innerHTML = ""
                break;
        }
    }),
    $sexo.addEventListener('blur', function(){
        if(!$sexo.value.trim()){
             $sexErrors.innerHTML = 'Campo requerido';
             $sexo.classList.add('is-invalid')
         } else {
             $sexo.classList.remove('is-invalid');
             $sexo.classList.add('is-valid');
             $sexErrors.innerHTML = ''
         }
    }),
    $terms.addEventListener('click', function (){
        $terms.value = "on"
        $terms.classList.toggle('is-valid')
        $terms.classList.remove('is-invalid')
        $termsErrors.innerHTML = ""
    }),
    $form.addEventListener("submit", function(event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if(elementsForm[index].value == ""
            && elementsForm[index].name !== "apellido"
            && elementsForm[index].type !== "file"
            || elementsForm[index].classList.contains("is-invalid")){
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add("is-invalid");
            $termsErrors.innerHTML = "Debes los términos y condiciones";
        }

        if(!errores){
            alert("Validado!")
            $form.submit()
        }

    })
    $file.addEventListener('change', 
    function fileValidation(){
        let filePath = $file.value, //Capturo el valor del input
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            $file.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }
        else{
            // Image preview
            console.log($file.files);
            if($file.files && $file.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = '';
                $file.classList.remove('is-invalid')
            }
        }
    })








})

