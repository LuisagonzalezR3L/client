import { NgModule } from '@angular/core';

import { 
	BsDropdownModule,
	TooltipModule,
	ModalModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
  	BsDropdownModule, 
  	TooltipModule, 
  	ModalModule
  ]
})
export class BootstrapModule {}