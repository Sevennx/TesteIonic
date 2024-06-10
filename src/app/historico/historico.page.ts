import { Component } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage {
  items = [
    {
      servico: 'Corte Clássico',
      barbeiro: 'Carlos',
      data: '15/04/2024',
      pagamento: 'Cartão',
      foto: './assets/fadeway.jpg'
    },
    {
      servico: 'Barba Detalhada',
      barbeiro: 'Rafael',
      data: '16/04/2024',
      pagamento: 'Dinheiro',
      foto: './assets/blindado.jpg'
    },
    {
      servico: 'Corte Clássico',
      barbeiro: 'Carlos',
      data: '15/04/2024',
      pagamento: 'Cartão',
      foto: './assets/fadeway.jpg'
    },
    {
      servico: 'Barba Detalhada',
      barbeiro: 'Rafael',
      data: '16/04/2024',
      pagamento: 'Dinheiro',
      foto: './assets/blindado.jpg'
    },
    // ... adicione mais itens com a propriedade 'foto' conforme necessário
  ];

  constructor() { }
}
