import { Component } from '@angular/core';
import { contas }  from './conta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp-angular';
  titular = contas.nome;
  saldo = contas.saldo;
  vlDeposito = 0;
  


  getSaldo(){
    return contas.saldo;
  }

  saque(vl){
    if(vl > contas.saldo){
      alert('Você não possui saldo')
     } else if(vl <= 0){
      alert('Informe um valor maior que zero')
    }else{
      contas.saldo -= parseFloat(vl); 
    }
  }

  deposito(vl){
    if(vl <= 0){
      alert('Informe um valor maior que zero')
    }else{
        contas.saldo += parseFloat(vl) ;              
    }
  };

  
}
