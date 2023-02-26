import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
  console.log(form.value);
    this.router.navigate(['/payment']);
  }
}
