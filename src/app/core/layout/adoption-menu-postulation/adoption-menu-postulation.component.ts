import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adoption-menu-postulation',
  templateUrl: './adoption-menu-postulation.component.html',
  styleUrls: ['./adoption-menu-postulation.component.scss']
})
export class AdoptionMenuPostulationComponent {

  @Input() postulation: any;

  constructor(){}

  ngOnInit(): void {
  }

}
