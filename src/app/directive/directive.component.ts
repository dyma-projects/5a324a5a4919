import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public content = '';
  public status = true;
  public texts= [];

  /*liaison de propriétés*/
  defineOne = 'text';
  defineTwo = 'date';
  defineThree = 'textarea';
  lienImage = 'https://www.wikichat.fr/wp-content/uploads/sites/2/comment-soigner-une-plaie-dun-chat.jpg';
  color = 'green';
  inputColorNom = 'transparent';
  inputColorPrenom = 'transparent';
  inputColorDate = 'transparent';
  inputColorChoix = 'transparent';


  /*liaison d'événements*/
  changeColor(color: string): void {
    this.color = color;
  }

  changeColorInputNom(inputColorNom: string): void {
    this.inputColorNom = inputColorNom;
  }

  changeColorInputPrenom(inputColorPrenom: string): void {
    this.inputColorPrenom = inputColorPrenom;
  }

  changeColorInputDate(inputColorDate: string): void {
    this.inputColorDate = inputColorDate;
  }

  changeColorInputChoix(inputColorChoix: string): void {
    this.inputColorChoix = inputColorChoix;
  }


  ngOnInit() {
    this.texts = ['un', 'deux', 'trois'];
  }
}
