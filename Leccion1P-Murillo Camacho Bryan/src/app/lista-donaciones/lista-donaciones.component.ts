import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Donacion {
  nombre: string;
  apellido: string;
  valor: number;
  fecha: Date;
}

@Component({
  selector: 'app-lista-donaciones',
  templateUrl: './lista-donaciones.component.html',
  styleUrls: ['./lista-donaciones.component.css']
})
export class ListaDonacionesComponent {
  donaciones: Donacion[] = [];
  totalRecaudado: number = 0;
  donacionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.donacionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      valor: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  agregarDonacion() {
    if (this.donacionForm.valid) {
      const nuevaDonacion: Donacion = {
        nombre: this.donacionForm.value.nombre,
        apellido: this.donacionForm.value.apellido,
        valor: this.donacionForm.value.valor,
        fecha: this.donacionForm.value.fecha
      };
      this.donaciones.push(nuevaDonacion);
      this.calcularTotalRecaudado();
      this.donacionForm.reset();
    }
  }

  eliminarDonacion(donacion: Donacion) {
    const index = this.donaciones.indexOf(donacion);
    if (index !== -1) {
      this.donaciones.splice(index, 1);
      this.calcularTotalRecaudado();
    }
  }

  calcularTotalRecaudado() {
    this.totalRecaudado = this.donaciones.reduce((total, donacion) => total + donacion.valor, 0);
  }
}
