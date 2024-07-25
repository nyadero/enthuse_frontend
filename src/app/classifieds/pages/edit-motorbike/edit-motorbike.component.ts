import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Listing } from '../../interface/listing';
import { MarketplaceService } from '../../service/marketplace.service';
import { CustomHttpResponse } from 'src/app/shared/interface/httpResponse';

@Component({
  selector: 'app-edit-motorbike',
  templateUrl: './edit-motorbike.component.html',
  styleUrls: ['./edit-motorbike.component.css']
})
export class EditMotorbikeComponent implements OnInit {

  motorbikeForm!: FormGroup;
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];

  httpResponse!: CustomHttpResponse;
  listing!: Listing;
  listingId!: any;

  constructor(private marketplaceService: MarketplaceService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // fetch listing to be edited
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.listingId = params.get("listingId");
      if (this.listingId) {
        this.marketplaceService.getListing(this.listingId).subscribe(
          (data) => {
            this.httpResponse = data;
            this.listing = data.data.listing;
            console.log(data);
            this.motorbikeForm.patchValue(data.data.listing);
          },
          (error) => {
            console.log(error.mesage);
          }
        )
      }
    });


    this.motorbikeForm = this.formBuilder.group({
      name: [""],
      price: [""],
      photos: [""],
      description: [""],
      location: [],
      previousOwnersCount: [],
      manufactureYear: [],
      mileage: ["", []],
      enginePower: ["", []],
      color: [],
      topSpeed: [],
      fuelType: [],
      manufacturer: [],
      motorbikeCategory: [],
      engineCapacity: [],
      transmissionType: []
    });

  }


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
    formData.append("enginePower",  values.enginePower);
    
    this.marketplaceService.updateMotorbikeListing(this.listingId, formData).subscribe(
      (data) => {
        console.log(data.message);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
