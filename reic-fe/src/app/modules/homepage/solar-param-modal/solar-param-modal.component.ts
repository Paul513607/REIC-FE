import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SolarEnergyOption } from '../../../model/SolarEnergyOption';
import { SolarCalculatorService } from 'src/app/services/solar-calculator.service';
import { Coordinate } from 'src/app/model/Coordinate';
import { SolarDataModalComponent } from '../solar-data-modal/solar-data-modal.component';

@Component({
  selector: 'app-solar-param-modal',
  templateUrl: './solar-param-modal.component.html',
  styleUrls: ['./solar-param-modal.component.css'],
})
export class SolarParamModalComponent {
  modalForm: FormGroup;
  solarEnergyOptions = Object.values(SolarEnergyOption); // Convert enum values to an array

  energyProduction: number[] = [];
  annualRevenue: number = 0;

  monthlyData: any[] = [
    { month: 'Jan', energyProduction: 0 },
    { month: 'Feb', energyProduction: 0 },
    { month: 'Mar', energyProduction: 0 },
    { month: 'Apr', energyProduction: 0 },
    { month: 'May', energyProduction: 0 },
    { month: 'Jun', energyProduction: 0 },
    { month: 'Jul', energyProduction: 0 },
    { month: 'Aug', energyProduction: 0 },
    { month: 'Sep', energyProduction: 0 },
    { month: 'Oct', energyProduction: 0 },
    { month: 'Nov', energyProduction: 0 },
    { month: 'Dec', energyProduction: 0 },
  ]

  public isResult: boolean = false;
  
  public coordinate: Coordinate | undefined;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SolarParamModalComponent>,  
    private readonly solarCalculatorService: SolarCalculatorService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isResult = false;
    this.coordinate = data.coordinate;
    this.modalForm = this.fb.nonNullable.group({
      solarPanelArea: [null, [Validators.required, Validators.min(1)]],
      option: [null, Validators.required],
      costPerKWh: [null, [Validators.required, Validators.min(1)]],
      operatingCost: [null, [Validators.required, Validators.min(1)]],
      initialInvestment: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onNextClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.solarCalculatorService.getSolarEnergyProduction(
      this.coordinate!,
      this.modalForm.value.solarPanelArea,
      this.modalForm.value.option
    ).subscribe((data) => {
      this.energyProduction = data;
      console.log('📢 [solar-param-modal.component.ts:84]', this.energyProduction);

      for (let i = 0; i < this.energyProduction.length; i++) {
        this.monthlyData[i].energyProduction = this.energyProduction[i];
      }

      console.log('📢 [solar-param-modal.component.ts:91]', this.monthlyData);

      this.solarCalculatorService.getAnnualRevenue(
        this.energyProduction,
        this.modalForm.value.costPerKWh,
        this.modalForm.value.operatingCost,
        this.modalForm.value.initialInvestment
      ).subscribe((data) => {
        this.annualRevenue = data;

        console.log('📢 [solar-param-modal.component.ts:98]', this.annualRevenue);
        this.isResult = true;

        this.dialogRef.close();

        const dialogRef2 = this.dialog.open(SolarDataModalComponent, {
          width: '600px',
          data: { energyProduction: this.energyProduction, annualRevenue: this.annualRevenue, monthlyData: this.monthlyData },
        });
    
        dialogRef2.afterClosed().subscribe(result => {
          if (result) {
            // Perform actions with the form data (result) here
            console.log(result);
          }
        });
      });
    });

    // this.dialogRef.close(this.modalForm.value);
  }

  onNextClick2(): void {

  }
}
