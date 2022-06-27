import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/Game';
import { SelectService } from 'src/app/shared/services/select.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  allGames: Game[] = [];
  filteredGames: Game[] = [];

  category: string = "top";
  toggled: boolean = false;

  constructor(
    private select: SelectService
  ) { }

  ngOnInit(): void {
    this.select.selectGames().subscribe(res => {
      this.allGames = res;
      this.filteredGames = this.allGames.filter(x => x.categories?.includes(this.category));

    });
  }

  filter(cat: string) {
    this.category = cat;
    this.filteredGames = this.allGames.filter(x => x.categories?.includes(cat));
  }

  filterOther() {
    //fun   ball    virtual
    this.category = 'other';
    this.filteredGames = this.allGames.filter(x => x.categories?.includes('fun' || 'ball' || 'virtual'));
  }

  toggleMenu() {
    let x = document.getElementById('myTopnav');
    if(x!.className === 'navbar-menu') {
      x!.className += " responsive-navbar";
      this.toggled = true;
    } else {
      x!.className = "navbar-menu";
      this.toggled = false;
    }
  }

}
