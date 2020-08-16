export function Validaciones(state, setAlert) {
  
  const {email, age, select, techs, descripcion, check} = state

  if(email.trim() === '' &&
      age === 0  &&
      select.trim() === '' &&
      techs.length === 0 &&
      descripcion.trim() === '' 
  ){
    setAlert('Todos los campos son obligatorios.')
    return true;
  }
  if(email.trim() === ''){
    setAlert('El email es obligatorio.')
    return true;
  }
  if(age === 0){
    setAlert('La edad es obligatoria.')
    return true;
  }
  if(select.trim() === ''){
    setAlert('Escoja un ejemplo prueba.')
    return true;
  }
  if(techs.length === 0){
    setAlert('Escoja una o varias tecnologías..')
    return true;
  }
  if(descripcion.trim() === ''){
    setAlert('La descripción es obligatoria.')
    return true;
  }
  if(!check){
    setAlert('Debe aceptar los términos y condiciones.')
    return true;
  }
}
