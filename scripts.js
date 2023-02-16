
let jobs;
function showmore(jobs){
  if (jobs==1){
  document.getElementById("job1").addEventListener('mouseover',document.getElementById("job1").innerHTML="Realizar el registro contable de facturas, nóminas, operaciones de cobro y pagos. Gestionar los cobros y pagos, emisión de efectos comerciales de pago. Logro: Ejecutar una excelente administración de la contabilidad evitando el cobro de impuestos extras. ");
  }else if(jobs==2){
  
  document.getElementById("job2").addEventListener('mouseover',document.getElementById("job2").innerHTML="Administrar y registrar los inmuebles de compra y venta. Auxiliar a los clientes en los trámites de documentación con las instituciones bancarias, otras específicas. Atención a público, otras tareas administrativas.");
  }else{
  
  document.getElementById("job3").addEventListener('mouseover',document.getElementById("job3").innerHTML="Analizar los datos obtenidos por el departamento de atención al cliente. Gestionar los eventos del departamento de RR. HH. auxiliándolos en seminarios, cursos de capacitación etc.");

  }
}
function showless(jobs){
  if(jobs==1){
  document.getElementById("job1").addEventListener('mouseout',document.getElementById("job1").innerHTML="Mostrar más información:");
  }else if(jobs==2){
  document.getElementById("job2").addEventListener('mouseout',document.getElementById("job2").innerHTML="Mostrar más información:");
  }else{
  document.getElementById("job3").addEventListener('mouseout',document.getElementById("job3").innerHTML="Mostrar más información:");
  }
}
