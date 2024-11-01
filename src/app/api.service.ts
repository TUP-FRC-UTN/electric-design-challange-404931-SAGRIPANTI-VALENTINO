import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Budget, ModuleType } from './models/budget';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http : HttpClient = inject(HttpClient)
  urlBase : string = "http://localhost:3000"

  getModuleTypes() {
    return this.http.get<ModuleType[]>(`${this.urlBase}/module-types`)
  }
  getBudgets() {
    return this.http.get<Budget[]>(`${this.urlBase}/budgets`)
  }

}
