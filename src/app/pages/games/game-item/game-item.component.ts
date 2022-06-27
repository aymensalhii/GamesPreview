import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/Game';
import { Jackpot } from 'src/app/shared/models/Jackpot';
import { SelectService } from 'src/app/shared/services/select.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input()
  game!: Game;

  Jackpots: Jackpot[] = [];
  JackpotExist: boolean = false;
  JackpotAmount?: number = 0;
  polling: any;

  constructor(
    private selectService: SelectService
  ) { }

  ngOnInit(): void {
    this.selectService.selectJackpots().subscribe(res => {
      this.Jackpots = res;

      this.Jackpots.forEach(el => {
        if(el.game === this.game.id) {
          this.JackpotExist = true;
          this.JackpotAmount = el.amount;
        }
      });
    });

    this.pollData();
    this.consulta();
  }

  pollData() {
    this.polling = setInterval(() => {
      this.consulta();
    }, 2000);
  }

  consulta() {
    this.selectService.selectJackpots().subscribe(res => {
      this.Jackpots = res;

      this.Jackpots.forEach(el => {
        if(el.game === this.game.id) {
          this.JackpotExist = true;
          this.JackpotAmount = el.amount;
        }
      });
    })
  }

}
