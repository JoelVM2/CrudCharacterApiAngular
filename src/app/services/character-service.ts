import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiUrl = "https://698a033ac04d974bc6a117bb.mockapi.io/Characters/";
  characters:any[] = [];

  constructor (private http: HttpClient){}

  getCharacters(){
    return this.http.get<any[]>(this.apiUrl);
  }

  getCharacterById(userId:Number){
    return this.http.get<any[]>(this.apiUrl+userId);
  }

  postCharacter(character: any) {
    return this.http.post(`${this.apiUrl}`, character);
  }

  putCharacter(id: number, character: any) {
    return this.http.put(`${this.apiUrl}/${id}`, character);
  }  

  deleteCharacter(id: number ) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
