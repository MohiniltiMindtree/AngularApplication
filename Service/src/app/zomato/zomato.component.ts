import { Component, OnInit } from '@angular/core';
import { Dominos } from 'src/Model/dominos';
import { Zomato } from 'src/Model/zomato';
import { CommonServiceService } from 'src/Services/common-service.service';

@Component({
  selector: 'app-zomato',
  templateUrl: './zomato.component.html',
  styleUrls: ['./zomato.component.css']
})
export class ZomatoComponent implements OnInit {

   
  constructor(public cs:CommonServiceService) { }

  zomato:Dominos[];

  ngOnInit(): void {
    console.log("inside zomato Component")
    this.cs.getAllZomato().subscribe(data1=>{
      this.zomato=data1;
      console.log(data1);
   });
  }

  saveZomatoData(zomatoo:Dominos)
  {
    console.log(zomatoo)
    this.cs.saveZomato(zomatoo).subscribe();
    window.location.reload();

  }



}
