import { NgModule }              from "@angular/core";
import { Routes, RouterModule }  from '@angular/router';
import { PrincipalComponent }    from "./components/pages/principal/principal.component";
import { Crud1Component }        from "./components/pages/crud1/crud1.component";
import { Crud2Component }        from "./components/pages/crud2/crud2.component";
import { Crud3Component }        from "./components/pages/crud3/crud3.component";
 
// mapeamento das rotas
const routes: Routes =
[
    { path: '', pathMatch: 'full', redirectTo: 'crud1' }, //raiz do projeto
    { path: 'crud1', component: Crud1Component },
    { path: 'crud2', component: Crud2Component },
    { path: 'crud3', component: Crud3Component },
    { path: 'principal', component: PrincipalComponent },
];
 
// exportando a configuração para que possamos inclui-la no modulo raiz do projeto
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })

export class AppRoutingModule { }