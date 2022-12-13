import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from "../../components/components.module";
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
        FuncionariosComponent,
        NewFuncionarioComponent
    ],
    imports: [
        CommonModule,
        FuncionariosRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule,
        MatProgressSpinnerModule
    ]
})
export class FuncionariosModule { }
