import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShipmentService } from '../../services/shipment.service';
import { Shipment } from '../../model/shipment';
@Component({
  selector: 'app-shippingstatus',
  templateUrl: './shippingstatus.component.html',
  styleUrls: ['./shippingstatus.component.css']
})
export class ShippingstatusComponent implements OnInit {
  displayedColumns: string[] = ['id','content','date','status', 'contact','actions'];
  dataSource = new MatTableDataSource<Shipment>();
  Shipment!: Shipment[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private ShipmentService: ShipmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getShipment();
  }

  applyFilter(event: Event) {
   
  }

  getShipment() {
    
  }

  deleteShipment(id: number) {
    
  }
}
