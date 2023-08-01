const resizer = document.querySelector('#resizer')
const sidebar = document.querySelector('#sidebar')
const mainContent = document.querySelector('#main-content')

function initResizerFn( resizer, sidebar ) 
{
   let mousePos, w

   function rs_mousedownHandler( e ) 
   {
      mousePos = e.clientX

      let sbWidth = window.getComputedStyle( sidebar ).width
      w = parseInt( sbWidth, 10 )

      document.addEventListener("mousemove", rs_mousemoveHandler)
      document.addEventListener("mouseup", rs_mouseupHandler)
   }

   function rs_mousemoveHandler( e ) 
   {
      let dx = e.clientX - mousePos
      let cw = w + dx; // complete width

      if ( cw <= 800 && cw >= 250 ) {
         sidebar.style.width = `${ cw }px`
      }
   }

   function rs_mouseupHandler() {
      // remove event mousemove && mouseup
      document.removeEventListener("mouseup", rs_mouseupHandler)
      document.removeEventListener("mousemove", rs_mousemoveHandler)
   }

   resizer.addEventListener("mousedown", rs_mousedownHandler)
}


initResizerFn( resizer, sidebar );