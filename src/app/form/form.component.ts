import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Data} from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   private http: HttpClient;

  onAddPost(form: NgForm) {
    console.log('hfdsjfhidfh hellooo');
    if (form.invalid) {
      return;
    }
    const data: Data = form.value;
    this.http.post('http://localhost:3000/api/posts', data)
    .subscribe( (res) => {
      console.log(res);

    });
    console.log('this is data' + data);
  }




  constructor() { }

  ngOnInit() {
  }

}
