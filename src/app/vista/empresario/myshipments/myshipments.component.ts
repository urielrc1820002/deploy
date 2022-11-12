import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Shipment } from '../../model/shipment';
import { ShipmentService } from '../../services/shipment.service';

@Component({
  selector: 'app-myshipments',
  templateUrl: './myshipments.component.html',
  styleUrls: ['./myshipments.component.css']
})
export class MyshipmentsComponent implements OnInit {
  displayedColumns: String[] = [
    'id',
    'content',
    'date',
    'status',
    'contact',
  ];
  dataSource= new MatTableDataSource<Shipment>();
  
  clickedRows = new Set<Shipment>();
  Shipment!: Shipment[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private ShipmentService: ShipmentService, private snackBar: MatSnackBar) { }
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