const resizer = document.querySelector('#resizer')
const sidebar = document.querySelector('#sidebar')
const mainContent = document.querySelector('#main-content')
const cardGrid = document.querySelector('#card-grid')
const profileName = document.querySelector('#profile-name')

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

      if ( cw <= 1000 && cw >= 250 ) {
         sidebar.style.width = `${ cw }px`
         if (sidebar.style.width >= "750px") {
            cardGrid.classList.remove('row-cols-sm-3')
            profileName.style.fontSize = "3rem"
         }
         if (sidebar.style.width <= "750px") {
            cardGrid.classList.add('row-cols-sm-3')
            profileName.style.fontSize = "4.5rem";
         }
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