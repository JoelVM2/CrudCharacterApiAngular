import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiUrl = "https://698a033ac04d974bc6a117bb.mockapi.io/Characters/";
  characters:any[] = [];

  constructor (private http: HttpClient){}

  /**
 * Obtiene la lista completa de personajes.
 * @returns {Observable<any[]>} Observable con el array de personajes.
 */
  getCharacters(){
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
 * Obtiene un personaje por su ID.
 * @param {number} userId - ID del personaje a buscar.
 * @returns {Observable<any>} Observable con el personaje encontrado.
 */
  getCharacterById(userId:Number){
    return this.http.get<any[]>(this.apiUrl+userId);
  }

  /**
 * Crea un nuevo personaje.
 * @param {any} character - Objeto con los datos del personaje.
 * @returns {Observable<any>} Observable con la respuesta del servidor.
 */
  postCharacter(character: any) {
    return this.http.post(`${this.apiUrl}`, character);
  }

  /**
 * Actualiza un personaje existente.
 * @param {number} id - ID del personaje a actualizar.
 * @param {any} character - Objeto con los nuevos datos del personaje.
 * @returns {Observable<any>} Observable con la respuesta del servidor.
 */
  putCharacter(id: number, character: any) {
    return this.http.put(`${this.apiUrl}/${id}`, character);
  }  

  /**
 * Elimina un personaje por su ID.
 * @param {number} id - ID del personaje a eliminar.
 * @returns {Observable<any>} Observable con la respuesta del servidor.
 */
  deleteCharacter(id: number ) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
