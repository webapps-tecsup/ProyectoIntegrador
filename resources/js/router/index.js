import { createRouter, createWebHistory } from 'vue-router';
const HomeComponent = () => import ('../page/home.vue');
const ContactoComponent = () => import ('../page/contacto.vue');
const LoginComponent = () => import ('../page/login.vue');
const ArtistaComponent = () => import ('../page/artista.vue');
const MusicaComponent = () => import ('../page/musica.vue');
const AlbumComponent = () => import ('../page/album.vue');
const UsuarioComponent = () => import ('../page/usuario.vue');

const routes=[
{ path:'/', name:'home', component:HomeComponent},
{ path:'/contacto', name:'contacto', component:ContactoComponent},
{ path:'/login', name:'login', component:LoginComponent},
{ path:'/artista', name:'artista', component:ArtistaComponent},
{ path:'/musica', name:'musica', component:MusicaComponent},
{ path:'/album', name:'album', component:AlbumComponent},
{ path:'/usuario', name:'usuario', component:UsuarioComponent}
];
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes
});
export default router;
