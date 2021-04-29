import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
  private obs = new Observable((list) => {
    list.next('string');
  });
  private sub!: Subscription;
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  constructor(
    private ordersService: OrdersService,
    private cd: ChangeDetectorRef
  ) {
    this.collection$ = this.ordersService.collection;
    // this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }

  ngOnInit(): void {
    this.sub = this.obs.subscribe((data) => console.log(data));
  }
  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeItem(item, state).subscribe((data) => {
      // traiter les reponses de l api
      item.state = data.state;
      // besoin de lancer un change detection manuellement car la reference d'item de change pas
      this.cd.detectChanges();
      // item = data;
      // ici inutile car la ref de l'item change et le change detection strategy onpush lance un CD si la ref d'item change
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
