export interface IOrders {
    orderNumber: string;
    orderDate: string;
    orderBuyer: string;
    orderBuyerContact: string;
    orderBuyerPicture: string;
    orderStatus: OrderStatus;
    orderPrice: string;
}

export interface IFilters { 
    status?: OrderStatus;
    buyer?: string; 
    search?: string
}

export type OrderStatus = 'paid' | 'pending' | 'failed';