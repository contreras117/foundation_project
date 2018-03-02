// Aqui va todo el codigo js extra que deseemos poner.
$(document).foundation()

//Codigo jQuery. Foundation usa jQuery
//Obtiene todos los elementos con el atributo 'data-toggle-dia'
$('[data-toggle-dia]').click(function(ev) {
  const $panel = $(this).data('toggleDia')
  //Obtiene el elemento con el id 'lineup-tabs'y ejecuta la funcion de foundation selectTab para el panel.
  $('#lineup-tabs').foundation('selectTab',$panel)
})

//funcion para cerrar el menu offCanvas una vez que se de click en una opcion.
const $offCanvas = $('#offCanvas')
const $drillDown = $('[data-drilldown]')

$offCanvas.find('li').click(function (ev) {
  $offCanvas.foundation('close')
  //$drillDown.foundation('_hideAll')   //Codigo para cerrar el submenu del lineup una vez demos click en una opcion
})