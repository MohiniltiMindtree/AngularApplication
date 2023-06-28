import { Component, OnInit } from '@angular/core';
import { Dominos } from 'src/Model/dominos';

import { CommonServiceService } from 'src/Services/common-service.service';

@Component({
  selector: 'app-dominoes',
  templateUrl: './dominoes.component.html',
  styleUrls: ['./dominoes.component.css']
})
export class DominoesComponent implements OnInit{
  
  constructor(public cs:CommonServiceService) { }

  dominos:Dominos[];


  ngOnInit(): void {
    this.cs.getAllDoninos().subscribe(data=>{
      this.dominos=data;
      console.log(data);
    });
  }

    saveDominosData(dominoss:Dominos)
    {
      console.log(dominoss)
      this.cs.saveDominos(dominoss).subscribe();
      window.location.reload();
    }
    
  }


  



