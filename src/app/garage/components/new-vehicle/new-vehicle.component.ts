import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { GarageService } from '../../service/garage.service';
import { NotificationService } from 'src/app/shared/service/notification.service';


@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  newVehicleForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  carmakes = null;
  transmission_types = null;
  bodytypes = null;
  drivetrains = null;
  engine_layouts = null;
  engine_positions = null;
  engine_aspirations = null;
  listing_owners = null;
  fueltypes = null;

  constructor(
    private formBuilder: FormBuilder,
     private garageService: GarageService,
      private notificationService: NotificationService
    ) { }

  ngOnInit(): void {
    this.newVehicleForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      buyingPrice: ["", [Validators.required]],
      currentValue: ["", [Validators.required]],
      color: ["", [Validators.required]],
      location: ["", [Validators.required]],
      info: ["", [Validators.required]],
      performanceModifications: ["", [Validators.required]],
      cosmeticModifications: ["", [Validators.required]],
      manufactureYear: ["", [Validators.required]],
      previousOwners: ["", [Validators.required]],
      make: ["", [Validators.required]],
      model: ["", [Validators.required]],
      doorsCount: ["", [Validators.required]],
      seatCount: ["", [Validators.required]],
      acceleration: ["", [Validators.required]],
      topSpeed: ["", [Validators.required]],
      engineCapacity: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      enginePosition: ["", [Validators.required]],
      engineLayout: ["", [Validators.required]],
      engineAspiration: ["", [Validators.required]],
      mileage: ["", [Validators.required]],
      fuelType: ["", [Validators.required]],
      fuelConsumption: ["", [Validators.required]],
      transmissionType: ["", [Validators.required]],
      driveTrain: ["", [Validators.required]],
      bodyType: ["", [Validators.required]],
    })
  }

  submitGarageVehicle() {
    if (this.newVehicleForm.valid) {
    const values = this.newVehicleForm.value;
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("buyingPrice", values.buyingPrice);
    formData.append("currentValue", values.currentValue);
    formData.append("color", values.color);
    formData.append("location", values.location);
    formData.append("info", values.info);
    formData.append("performanceModifications", values.performanceModifications);
    formData.append("cosmeticModifications", values.cosmeticModifications);
    formData.append("manufactureYear", values.manufactureYear);
    formData.append("previousOwnersCount", values.previousOwners);
    formData.append("make", values.make);
    formData.append("model", values.model);
    formData.append("doorsCount", values.doorsCount);
    formData.append("seatCount", values.seatCount);
    formData.append("acceleration", values.acceleration);
    formData.append("topSpeed", values.topSpeed);
    formData.append("engineCapacity", values.engineCapacity);
    formData.append("enginePower", values.enginePower);
    formData.append("enginePosition", values.enginePosition);
    formData.append("engineLayout", values.engineLayout);
    formData.append("engineAspiration", values.engineAspiration);
    formData.append("mileage", values.mileage);
    formData.append("fuelType", values.fuelType);
    formData.append("fuelConsumption", values.fuelConsumption);
    formData.append("transmissionType", values.transmissionType);
    formData.append("driveTrain", values.driveTrain);
    formData.append("bodyType", values.bodyType);
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });

    this.garageService.newGarageVehicle(formData).subscribe(
      (data) => {
        console.log({data});
        this.notificationService.showSnackbar(data.message, data.status);
      }
    )
    }
  }


  getVehiclePhotos(files: File[]) {
    this.selectedFiles = files;
  }
}
