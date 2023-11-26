import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-menu-postulation',
  templateUrl: './general-menu-postulation.component.html',
  styleUrls: ['./general-menu-postulation.component.scss']
})
export class GeneralMenuPostulationComponent {

  @Input() postulation: any;

  constructor(){}

  ngOnInit(): void {
  }

}
