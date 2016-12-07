import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StarComponent } from './star.component';

@NgModule({
    declarations: [ StarComponent ],
    imports: [ CommonModule ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})
export class SharedModule { }
