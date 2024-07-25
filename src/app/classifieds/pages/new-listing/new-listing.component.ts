import { AfterViewInit, Component, Input, OnInit, ViewChild, untracked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarketplaceService } from '../../service/marketplace.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {

  listingForm!: FormGroup;
  listingType: string = "Vehicle";
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];

  // vehicle request 
  vehicleForm = this.formBuilder.group({
    make: [],
    model: [],
    engineSize: [],
    doorsCount: [],
    seatCount: [],
    mileage: [],
    bodyType: [],
    transmissionType: [],
    color: [],
    fuelType: [],
    fuelConsumption: [],
    driveTrain: [],
    acceleration: [],
    topSpeed: [],
    engineLayout: [],
    enginePosition: [],
    enginePower: [],
    engineAspiration: [],
    previousOwnersCount: [],
    sellerType: [],
  })

  constructor(private formBuilder: FormBuilder, private marketplaceService: MarketplaceService, private pageTitle: Title) { }

  ngOnInit(): void {
    this.pageTitle.setTitle("New Listing")
    this.listingForm = this.formBuilder.group({
      name: [""],
      price: [""],
      photos: [""],
      description: [""],
      vehicleRequest: this.vehicleForm,
      aircraftRequest: null,
      motorbikeRequest: null,
      boatRequest: null
    })
  }

  title = "New Listing";
  // set listing type to vehicle, available listing types are vehicle, boat, motorbike, bicycle and aeroplane
  selectedListingType: boolean = false;

  // this method changes the listing type to vehicle
  vehicleListingType() {
    this.listingType = "Vehicle";
  }

  // this method changes the listing type to vehicle
  motorbikeListingType() {
    this.listingType = "Motorbike";
  }

  bicycleListingType() {
    this.listingType = "Bicycle";
  }

  boatListingType() {
    this.listingType = "Boat";
  }

  aeroplaneListingType() {
    this.listingType = "Aeroplane";
  }

  // Implement the method to receive the selected files
  onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }

  submitListing() {
    const values = this.listingForm.value;
    const vehicleFormData = new FormData();
    vehicleFormData.append("make", values.vehicleRequest.make);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("listingType", this.listingType.toUpperCase());
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });
    // Append vehicleRequest fields individually
    const vehicleRequest = values.vehicleRequest;
    formData.append("vehicleRequest.make", vehicleRequest.make);
    formData.append("vehicleRequest.model", vehicleRequest.model);
    formData.append("vehicleRequest.engineSize", vehicleRequest.engineSize.toString());
    formData.append("vehicleRequest.doorsCount", vehicleRequest.doorsCount.toString());
    formData.append("vehicleRequest.seatCount", vehicleRequest.seatCount.toString());
    formData.append("vehicleRequest.mileage", vehicleRequest.mileage.toString());
    formData.append("vehicleRequest.bodyType", vehicleRequest.bodyType);
    formData.append("vehicleRequest.transmissionType", vehicleRequest.transmissionType);
    formData.append("vehicleRequest.color", vehicleRequest.color);
    formData.append("vehicleRequest.fuelType", vehicleRequest.fuelType);
    formData.append("vehicleRequest.fuelConsumption", vehicleRequest.fuelConsumption);
    formData.append("vehicleRequest.driveTrain", vehicleRequest.driveTrain);
    formData.append("vehicleRequest.acceleration", vehicleRequest.acceleration.toString());
    formData.append("vehicleRequest.topSpeed", vehicleRequest.topSpeed.toString());
    formData.append("vehicleRequest.engineLayout", vehicleRequest.engineLayout);
    formData.append("vehicleRequest.enginePosition", vehicleRequest.enginePosition);
    formData.append("vehicleRequest.enginePower", vehicleRequest.enginePower);
    formData.append("vehicleRequest.engineAspiration", vehicleRequest.engineAspiration);
    formData.append("vehicleRequest.previousOwnersCount", vehicleRequest.previousOwnersCount.toString());
    formData.append("vehicleRequest.sellerType", vehicleRequest.sellerType);


    this.marketplaceService.addNewListing(formData).subscribe(
      (data) => {
        console.log(data.message);
      },
      (error) => {
        console.log(error.message);
      }
    )
  }


}
