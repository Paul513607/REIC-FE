import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-solar-data-modal',
  templateUrl: './solar-data-modal.component.html',
  styleUrls: ['./solar-data-modal.component.css']
})
export class SolarDataModalComponent {
  public annualRevenue: number = 0;
  public monthlyData: any[] = [];
  public energyProduction: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<SolarDataModalComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.annualRevenue = data.annualRevenue;
    this.monthlyData = data.monthlyData;
    this.energyProduction = data.energyProduction;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onNextClick(): void {
    this.dialogRef.close();
  }
}
