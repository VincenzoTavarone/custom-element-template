import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
// import { NomeComponent } from percorso_componente;


@NgModule({
  declarations: [    
    //Nome Componente che implementa il custom element
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents : [
    // Nome Componente che implementa il custom element
  ]
})
export class AppModule { 
  constructor(private injector : Injector) {}

  ngDoBootstrap() {
    // let element = createCustomElement(NomeComponente, {
    //   injector : this.injector
    // });
    // customElements.define('tag-del-custom-element', element);
  }

}
