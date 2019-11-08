import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url = 'http://localhost:8080/gamarra/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  findAll(): Observable<any> {
    return this.http.get(this.url);
  }

  insert(cliente): Observable<any> {

    return this.http.post<Cliente>(this.url, cliente, {headers: this.httpHeaders});
  }

  delete(id: number){
    return this.http.delete<Cliente>(this.url+`/${id}`,{headers: this.httpHeaders});
  }

  constructor(private http: HttpClient) {
  }

  findById(id: number) {
    return this.http.get<any>(this.url+`/cliente/${id}`,{headers: this.httpHeaders});
  }

  updateById(cliente:Cliente){
    return this.http.put<Cliente>(this.url+`/update/${cliente.id}`,cliente,{headers: this.httpHeaders});
  }
}
