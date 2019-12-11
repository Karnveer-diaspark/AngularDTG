import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { PollformserviceService } from 'src/app/pollformservice.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  pollform :FormGroup
  constructor(private formBuilder: FormBuilder,private routes: Router,private cd: ChangeDetectorRef, private pollformservice:PollformserviceService) {
    this.pollform = formBuilder.group({
      r1: ['', Validators.required],
      r2:  ['', Validators.required],
      file: [null]
    })
   }
  editFile: boolean = true;
  removeUpload: boolean = false;
  // imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';

  ngOnInit() {

  }
  OnSubmit(){
    
    console.log(this.pollform.value);

  }
  uploadFile(event) {
    let reader = new FileReader(); 
    // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.pollform.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();    
      console.log()  
    }

    this.pollformservice.uploadfile(file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Response:
          console.log(event.body);
      }
    });
  }

}
