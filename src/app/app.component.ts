import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IFilters, IOrders } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // init form
  public filtersForm!: FormGroup;
  public buyerControl!: FormControl;
  public statusControl!: FormControl;
  public searchControl!: FormControl;

  // init filters
  public ordersFilters!: IFilters;

  // flags
  public isSelectAll = false;
  public isNavOpened = window.innerWidth > 1024;

  // mock data
  public orders: IOrders[] = [
    {
      orderNumber: '077-8741258-952',
      orderDate: '6/6/2022',
      orderBuyer: 'Hernandez Daniel',
      orderBuyerContact: 'dhernandez@maboite.com',
      orderBuyerPicture: 'hernandez.png',
      orderStatus: 'paid',
      orderPrice: '7 165,00 €'
    },
    {
      orderNumber: '077-8741458-845',
      orderDate: '6/6/2022',
      orderBuyer: 'Bragoulet Marie',
      orderBuyerContact: 'mbragoulet@maboite.com',
      orderBuyerPicture: 'bragoulet.png',
      orderStatus: 'pending',
      orderPrice: '1 486,00 €'
    },
    {
      orderNumber: '077-8741548-874',
      orderDate: '6/6/2022',
      orderBuyer: 'Archer Marie-Françoise',
      orderBuyerContact: 'mfarcher@maboite.com',
      orderBuyerPicture: 'archer.png',
      orderStatus: 'paid',
      orderPrice: '14 954,99 €'
    },
    {
      orderNumber: '077-1259849-963',
      orderDate: '6/6/2022',
      orderBuyer: 'Hernandez Daniel',
      orderBuyerContact: 'dhernandez@maboite.com',
      orderBuyerPicture: 'hernandez.png',
      orderStatus: 'failed',
      orderPrice: '864,00 €'
    },
    {
      orderNumber: '077-1486579-745',
      orderDate: '6/6/2022',
      orderBuyer: 'Hernandez Daniel',
      orderBuyerContact: 'dhernandez@maboite.com',
      orderBuyerPicture: 'hernandez.png',
      orderStatus: 'paid',
      orderPrice: '7 165,00 €'
    },
    {
      orderNumber: '077-8745874-478',
      orderDate: '6/6/2022',
      orderBuyer: 'Hernandez Daniel',
      orderBuyerContact: 'dhernandez@maboite.com',
      orderBuyerPicture: 'hernandez.png',
      orderStatus: 'paid',
      orderPrice: '7 165,00 €'
    },
    {
      orderNumber: '077-8741258-953',
      orderDate: '6/6/2022',
      orderBuyer: 'Hernandez Daniel',
      orderBuyerContact: 'dhernandez@maboite.com',
      orderBuyerPicture: 'hernandez.png',
      orderStatus: 'paid',
      orderPrice: '7 165,00 €'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.buyerControl = this.fb.control('');
    this.statusControl = this.fb.control('');
    this.searchControl = this.fb.control(null);
    this.filtersForm = this.fb.group({
      buyer: this.buyerControl,
      status: this.statusControl,
      search: this.searchControl
    });
  }

  ngOnInit(): void {
    this.onChanges();
  }

  // toggles select for all rows
  public toggleAll(event: any): void {
    this.isSelectAll = event.target.checked;
  }

  // toggles open class for navigation
  public toggleNav(event: any): void {
    this.isNavOpened = !this.isNavOpened;
  }

  // updates filters when form values change
  private onChanges(): void {
    this.filtersForm.valueChanges.subscribe((val: IFilters) => {
      this.ordersFilters = val;
    });
  }

}
