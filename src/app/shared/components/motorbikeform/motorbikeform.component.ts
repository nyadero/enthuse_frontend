import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarketplaceService } from 'src/app/classifieds/service/marketplace.service';
import { CustomHttpResponse } from '../../interface/httpResponse';



@Component({
  selector: 'motorbikeform',
  templateUrl: './motorbikeform.component.html',
  styleUrls: ['./motorbikeform.component.css']
})
export class MotorbikeformComponent implements OnInit {

  motorbikeForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  httpResponse!: CustomHttpResponse;
  @Input() businessId!: string;
   transmission_types = null;
  fueltypes = null;
  motorbikeManufacturers = null;
  motorbikeCategories = null;


  constructor(private formBuilder: FormBuilder, private marketplaceService: MarketplaceService) { }


  ngOnInit(): void {    
    this.motorbikeForm = this.formBuilder.group({
      name: ["",  [Validators.required]],
      price: ["",  [Validators.required]],
      photos: ["",  [Validators.required]],
      description: ["", [Validators.required]],
      location: ["", [Validators.required]],
      previousOwnersCount: ["", [Validators.required]],
      manufactureYear: ["", [Validators.required]],
      mileage: ["",  [Validators.required]],
      engineCapacity: ["",  [Validators.required]],
      color: ["", [Validators.required]],
      topSpeed: ["", [Validators.required]],
      fuelType: ["", [Validators.required]],
      manufacturer: ["", [Validators.required]],
      motorbikeCategory: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      transmissionType: ["", [Validators.required]],
      fuelConsumption: ["", [Validators.required]],
    });
  }


  // Implement the method to receive the selected files
  onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }

  submitMotorbikeForm() {
    const values = this.motorbikeForm.value;
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });
    formData.append("location", values.location);
    formData.append("previousOwnersCount", values.previousOwnersCount);
    formData.append("manufactureYear", values.manufactureYear);
    formData.append("mileage", values.mileage);
    formData.append("topSpeed", values.topSpeed);
    formData.append("color", values.color);
    formData.append("fuelType", values.fuelType);
    formData.append("manufacturer", values.manufacturer);
    formData.append("motorbikeCategory", values.motorbikeCategory);
    formData.append("engineCapacity", values.engineCapacity);
    formData.append("transmissionType", values.transmissionType);
    formData.append("fuelConsumption", values.fuelConsumption);
    formData.append("enginePower",  values.enginePower);
     if (this.businessId) {
      formData.append("businessId", this.businessId);
    }


    this.marketplaceService.addMotorbikeListing(formData).subscribe(
      (data) => {
        console.log(data);
        this.httpResponse = data;
        alert(this.httpResponse.message)
      },
      (error) => {
        console.log(error);
      }
    )
  }

   // fetch business


}
