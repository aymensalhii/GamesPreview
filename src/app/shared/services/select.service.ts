import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/Game';
import { Jackpot } from '../models/Jackpot';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  api = "http://stage.whgstage.com/front-end-test/";

  constructor(
    private http: HttpClient
  ) { }

  selectGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api+'games.php');
  }

  selectJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(this.api+'jackpots.php');
  }
}
