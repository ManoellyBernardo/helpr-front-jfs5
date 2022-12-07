import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
    declarations: [
        FuncionariosComponent
    ],
    imports: [
        CommonModule,
        FuncionariosRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule
    ]
})
export class FuncionariosModule { }
