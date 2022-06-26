import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  api = "http://stage.whgstage.com/front-end-test/games.php";

  constructor(
    private http: HttpClient
  ) { }

  selectGames(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }
}
