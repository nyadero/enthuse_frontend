import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuctionsService } from '../../service/auctions.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-motorbike-auction-form',
  templateUrl: './motorbike-auction-form.component.html',
  styleUrls: ['./motorbike-auction-form.component.css']
})
export class MotorbikeAuctionFormComponent implements OnInit {
 
  motorbikeAuctionForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  httpResponse!: CustomHttpResponse;
  @Input() businessId!: string;
  transmission_types = null;
  fueltypes = null;
  motorbikeManufacturers = null;
  motorbikeCategories = null;

  constructor(
     private formBuilder: FormBuilder,
     private auctionsService:AuctionsService,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
    this.motorbikeAuctionForm = this.formBuilder.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      startingBid: ["", [Validators.required]],
      expectedReserve: ["", [Validators.required]],
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
    })
  }

  // Implement the method to receive the selected files
  onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }


  submitMotorbikeAuctionForm() {
    const values = this.motorbikeAuctionForm.value;
    const formData = new FormData();
    formData.append("startDate", values.startDate);
    formData.append("endDate", values.endDate);
    formData.append("startingBid", values.startingBid);
    formData.append("expectedReserve", values.expectedReserve);
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

    this.auctionsService.submitMotorbikeAuction(formData).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.showSnackbar(data.message, data.status);
        // this.vehicleForm.reset();
      },
      (error) => {
        console.log(error);
      }
    )
    
  }

}
