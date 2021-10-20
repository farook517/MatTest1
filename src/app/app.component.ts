import { Component } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
interface Users {
  userId: string;
  userName: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MatTest';
  selectedValue: string;
   userName: string;
   listData: any;
  // checkoutForm: FormGroup;
  userForm: FormGroup;

  constructor(private fb:FormBuilder)
  {
    this.listData = [];
    this.userForm = this.fb.group({
      userId :[''],
      userName :['']

    })
  }

 userarray: Users[]=[];
  
  
  users: Users[] = [
    {userId:'s3zycw', userName: 'divya'},
    {userId:'sRZHQK', userName: 'Ramya'},
    {userId:'S0MV9Z', userName: 'Somdev'},
    {userId:'S6928M', userName: 'Prasanna'},
    {userId:'S0B7AK', userName: 'Ramyasree'},
    {userId:'S0N2UJ', userName: 'Anusha'},
    {userId:'S4DXBF', userName: 'RamanaiahUdumula'},
    {userId:'S3H48Z', userName: 'Hema'},
    {userId:'S8CB63', userName: 'Sailaja'},
    {userId:'S1C72A', userName: 'AjayDeshpande'}
  ];
  select(selectedValue)
  {
    //console.log("select called",selectedValue);
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].userId==selectedValue)
      {
         this.userName=this.users[i].userName;
         console.log(this.userName);
         //this.userarray.push(this.users[i]);
      }
    }
  }
  get items()
  {
     return this.userForm.get('items') as FormArray;
  }

  insert()
  {
    this.userarray.push({userId: this.selectedValue,userName: this.userName})
    console.log(this.userarray);
  }
 removeElement(element)
 {
   //this.userarray.slice(element,1);
  for(let i=0;i<this.userarray.length;i++)
  {
    console.log(element);
    if(element==i)
    {
      console.log(element,"arra",this.userarray);
      this.userarray.splice(element,1);
    }
  }
 }
  
 /* 
 ____________________________________________________________________________
  constructor( private formBuilder: FormBuilder)
  {
    this.checkoutForm= formBuilder.group({
      'items' : this.formBuilder.array([
        this.formBuilder.group({
          id:[''],
          userID:[''],
          userName:['']
        })
      ])
    })
  }
  ngOnInit()
  {

  }
  users: Users[] = [
    {userId:'s3zycw', userName: 'divya'},
    {userId:'sRZHQK', userName: 'Ramya'},
    {userId:'S0MV9Z', userName: 'Somdev'},
    {userId:'S6928M', userName: 'Prasanna'},
    {userId:'S0B7AK', userName: 'Ramyasree'},
    {userId:'S0N2UJ', userName: 'Anusha'},
    {userId:'S4DXBF', userName: 'RamanaiahUdumula'},
    {userId:'S3H48Z', userName: 'Hema'},
    {userId:'S8CB63', userName: 'Sailaja'},
    {userId:'S1C72A', userName: 'AjayDeshpande'}
  ];
  select(selectedValue)
  {
    //console.log("select called",selectedValue);
    for(let i=0;i<this.users.length;i++)
    {
      if(this.users[i].userId==selectedValue)
      {
         this.userName=this.users[i].userName;
         console.log(this.userName);
      }
    }
  }
  postData()
  {
    console.log(this.checkoutForm.value);
  }
  resetForm()
  {
    this.checkoutForm.reset
  }
  get items()
  {
     return this.checkoutForm.get('items') as FormArray;
  }
  addNewItem()
  {
    const itemLength=this.items.length;
    const newItem = this.formBuilder.group({
      id: [itemLength+1],
      userID: [''],
      userName: ['']
    });
    this.items.push(newItem);
  }
  removeItem(itemId)
  {
    console.log('Remove is clicked');
    console.log(itemId);
    this.items.removeAt(itemId);
  }
  */
}
