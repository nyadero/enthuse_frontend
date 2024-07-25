import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from '../../service/marketplace.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Listing } from '../../interface/listing';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  vehicleForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];

  httpResponse!: CustomHttpResponse;
  listing!: Listing;
  vehicleId!: string;

  constructor(private marketplaceService: MarketplaceService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // fetch listing to be edited
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const listingId = params.get("id");
      if (listingId) {
        this.vehicleId = listingId
        this.marketplaceService.getListing(listingId).subscribe(
          (data) => {
            this.httpResponse = data;
            this.listing = data.data;
            console.log(data);
            this.vehicleForm.patchValue(data.data.listing);
          },
          (error) => {
            console.log(error.mesage);
          }
        )
      }
    });

    // instantiate form
    this.vehicleForm = this.formBuilder.group({
      name: ["", []],
      price: ["", []],
      photos: ["", []],
      description: ["", []],
      location: ["", []],
      make: ["", []],
      model: ["", []],
      engineSize: ["", []],
      doorsCount: ["", []],
      seatCount: ["", []],
      mileage: ["", []],
      bodyType: ["", []],
      transmissionType: ["", []],
      color: ["", []],
      fuelType: ["", []],
      fuelConsumption: ["", []],
      driveTrain: ["", []],
      acceleration: ["", []],
      topSpeed: ["", []],
      engineLayout: ["", []],
      enginePosition: ["", []],
      enginePower: ["", []],
      engineAspiration: ["", []],
      previousOwnersCount: ["", []],
      sellerType: ["", []],
    });

  }

  // Implement the method to receive the selected files
  onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }

  editVehicleListing() {
    const values = this.vehicleForm.value;
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });
    formData.append("make", values.make);
    formData.append("location", values.location);
    formData.append("model", values.model);
    formData.append("engineSize", values.engineSize.toString());
    formData.append("doorsCount", values.doorsCount.toString());
    formData.append("seatCount", values.seatCount.toString());
    formData.append("mileage", values.mileage.toString());
    formData.append("bodyType", values.bodyType);
    formData.append("transmissionType", values.transmissionType);
    formData.append("color", values.color);
    formData.append("fuelType", values.fuelType);
    formData.append("fuelConsumption", values.fuelConsumption);
    formData.append("driveTrain", values.driveTrain);
    formData.append("acceleration", values.acceleration.toString());
    formData.append("topSpeed", values.topSpeed.toString());
    formData.append("engineLayout", values.engineLayout);
    formData.append("enginePosition", values.enginePosition);
    formData.append("enginePower", values.enginePower);
    formData.append("engineAspiration", values.engineAspiration);
    formData.append("previousOwnersCount", values.previousOwnersCount.toString());
    formData.append("sellerType", values.sellerType);


    this.marketplaceService.updateListing(this.vehicleId, formData).subscribe(
      (data) => {
        console.log(data.message);
      },
      (error) => {
        console.log(error.message);
      }
    )
  }

}
