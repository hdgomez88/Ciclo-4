import Swal from "sweetalert2";

const mensaje= (icon, titulo)=>{
    Swal.fire({
        icon: icon,
        title: titulo,
        showConfirmButton: false,
        timer: 2500
      })
}

export default mensaje;