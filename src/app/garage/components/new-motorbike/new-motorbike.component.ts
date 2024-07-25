import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GarageService } from '../../service/garage.service';
import { NotificationService } from 'src/app/shared/service/notification.service';


@Component({
  selector: 'app-new-motorbike',
  templateUrl: './new-motorbike.component.html',
  styleUrls: ['./new-motorbike.component.css']
})
export class NewMotorbikeComponent implements OnInit {

  motorbikeForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  transmission_types = null;
  fueltypes = null;
  motorbikeManufacturers = null;
  motorbikeCategories = null;

  constructor(private formBuilder: FormBuilder, private garageService: GarageService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.motorbikeForm = this.formBuilder.group({
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
      manufacturer: ["", [Validators.required]],
      category: ["", [Validators.required]],
      engineCapacity: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      transmissionType: ["", [Validators.required]],
      fuelType: ["", [Validators.required]],
      acceleration: ["", [Validators.required]],
      fuelConsumption: ["", [Validators.required]],
      mileage: ["", [Validators.required]],
      topSpeed: ["", [Validators.required]],
    })
  }


  getMotorbikePhotos(photos: File[]) {
    this.selectedFiles = photos;
  }


  addGarageMotorbike() {
    const values = this.motorbikeForm.value;
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
    formData.append("manufacturer", values.manufacturer);
    formData.append("category", values.category);
    formData.append("acceleration", values.acceleration);
    formData.append("topSpeed", values.topSpeed);
    formData.append("engineCapacity", values.engineCapacity);
    formData.append("enginePower", values.enginePower);
    formData.append("mileage", values.mileage);
    formData.append("fuelType", values.fuelType);
    formData.append("fuelConsumption", values.fuelConsumption);
    formData.append("transmissionType", values.transmissionType);
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });

    this.garageService.newGarageMotorbike(formData).subscribe(
      (data) => {
        console.log({data});
        this.notificationService.showSnackbar(data.message, data.status);
      }
    )
  }

}
