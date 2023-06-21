import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.css']
})
export class DatosContactoComponent {
  foto: string = 'assets/imagenes/Foto.jpg';
  nombre: string = 'Bryan Jose';
  apellido: string = 'Murillo Camacho';
  correo: string = 'bryanjosemurillocamacho@gmail.com';
}