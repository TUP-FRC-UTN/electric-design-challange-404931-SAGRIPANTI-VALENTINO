import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ModuleType, Zone } from '../models/budget';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent implements OnInit{
  
  private service : ApiService = inject(ApiService)

  allModuleTypes : ModuleType[] = []
  allZones = Zone

  ngOnInit(): void {
    this.service.getModuleTypes().subscribe(data => {
      this.allModuleTypes = data
    })
  }

  budget : FormGroup = new FormGroup({
    client : new FormControl(''),
    date : new FormControl(new Date()),
    modules : new FormArray([])
  })

  get modules() {
    return this.budget.controls['modules'] as FormArray
  }
  addModule() {
    const module = new FormGroup({
      id : new FormControl(''),
      name : new FormControl(''),
      slots : new FormControl(''),
      price : new FormControl(''),
      zone : new FormControl('')
    })
    this.modules.push(module)
  }
  removeModule(index : number) {
    this.modules.removeAt(index)
  }
  sendForm() {
    console.log(this.budget);
    
  }
}
