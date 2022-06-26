import { Component, OnInit } from '@angular/core';
import { SelectService } from 'src/app/shared/services/select.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(
    private select: SelectService
  ) { }

  ngOnInit(): void {
    this.select.selectGames().subscribe(res => {
      console.log(res);
    })
  }

}
