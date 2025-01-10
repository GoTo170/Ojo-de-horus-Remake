import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
  {
    path: 'perfilusuario',
    loadChildren: () => import('./pages/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  {
    path: 'comunidades',
    loadChildren: () => import('./pages/comunidades/comunidades.module').then( m => m.ComunidadesPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'acuerdos-legales',
    loadChildren: () => import('./pages/acuerdos-legales/acuerdos-legales.module').then( m => m.AcuerdosLegalesPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./pages/comunidad/comunidad.module').then( m => m.ComunidadPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./pages/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'politica-de-privacidad',
    loadChildren: () => import('./pages/politica-de-privacidad/politica-de-privacidad.module').then( m => m.PoliticaDePrivacidadPageModule)
  },
  {
    path: 'politica-de-usuario',
    loadChildren: () => import('./pages/politica-de-usuario/politica-de-usuario.module').then( m => m.PoliticaDeUsuarioPageModule)
  },
  {
    path: 'reportar-contenido',
    loadChildren: () => import('./pages/reportar-contenido/reportar-contenido.module').then( m => m.ReportarContenidoPageModule)
  },
  {
    path: 'crearcomunidad',
    loadChildren: () => import('./pages/crearcomunidad/crearcomunidad.module').then( m => m.CrearcomunidadPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./pages/seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./pages/cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
