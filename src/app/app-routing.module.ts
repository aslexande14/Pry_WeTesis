import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ChatComponent } from './chat/chat.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'loader', component: LoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
