import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anuncios } from '../anuncios';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit{
  
  anuncio : Anuncios[] = []
  formGroupAnuncio : FormGroup;


  constructor (private anuncioService: AnunciosService, private formBuilder: FormBuilder){
    this.formGroupAnuncio = this.formBuilder.group(
      {
        id: [],
        name: [],
        type : [],
        description : [],
        url : []
      }
    );
  }
  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio() {
    this.anuncioService.getAnuncios().subscribe(
      {
        next: data => this.anuncio = data,
        error: msg => console.log("Erro ao chamar o endpoint" + msg)
      }
    )
  }
  Cadastrar() {
    this.anuncioService.Cadastrar(this.formGroupAnuncio.value).subscribe(
      {
        next : data => {
          this.anuncio.push(data);
          this.formGroupAnuncio.reset();
        }
      }
    )
  }
}
