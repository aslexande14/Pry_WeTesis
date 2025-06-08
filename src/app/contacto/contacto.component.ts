import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  universidades: any[] = [];
  selectedUniversity: string = '';

  formData={
    nombre: '',
    email: '',
    telefono: '',
    universidad: '',
    tipo: '',
    mensaje: '',
    archivo: null //
  }

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.obtenerUniversidades();
  }
  obtenerUniversidades() {
    this.http.get<any[]>('assets/universidades.json')
      .subscribe(data => {
        this.universidades = data;
      }, error => {
        console.error('Error al obtener universidades', error);
      });
  }

  enviarFormulario(contactForm: any) {
    if (contactForm.valid) {
      console.log('Datos del formulario:', this.formData); // 👀 Verifica los datos aquí
  
      this.http.post('https://formspree.io/f/mqapagrl', {
        nombre: this.formData.nombre,
        email: this.formData.email,
        telefono: this.formData.telefono,
        universidad: this.formData.universidad,
        tipo: this.formData.tipo,
        mensaje: this.formData.mensaje
      }).subscribe({
        next: () => {
          alert('Mensaje enviado con éxito.');
          contactForm.resetForm();
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error); // 👀 Revisa el error aquí
          alert('Hubo un error al enviar el mensaje.');
        }
      });
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.archivo = file;
  }
  validarEntradaNumerica(event: KeyboardEvent): boolean {
    const teclaPresionada = event.key;
    if (!/^[0-9]$/.test(teclaPresionada)) {
      event.preventDefault(); // Evita que se ingresen letras o caracteres no permitidos
      return false;
    }
    return true;
  }
}
