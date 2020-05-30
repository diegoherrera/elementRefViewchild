import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("midiv")
  divRef: ElementRef;

  @ViewChild(TimerComponent)
  componenteRef: TimerComponent;

  title = 'elementRefViewchild';

  ngAfterViewInit(): void {
    console.log(this.divRef);  
    this.divRef.nativeElement.innerHTML = "Hola Curso Element Ref"; 
  }

  eventoAction1() {
    console.log('Llego aqui' + this.componenteRef);
    this.componenteRef.incrementar();
  }

  eventoAction2() {
    console.log('Llego aqui' + this.componenteRef);
    this.componenteRef.decrementar();
  }

}
