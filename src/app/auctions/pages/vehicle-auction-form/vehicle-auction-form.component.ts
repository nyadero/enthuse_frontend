import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from 'ngx-editor';
import { BodyTypeEnum } from 'src/app/classifieds/enums/bodytypes.enum';
import { CarMakes } from 'src/app/classifieds/enums/carmakes.enums';
import { DriveTrainEnum } from 'src/app/classifieds/enums/drivetrain.enum';
import { engineAspirations } from 'src/app/classifieds/enums/engine-aspirations.enum';
import { EngineLayoutEnum } from 'src/app/classifieds/enums/enginelayout.enum';
import { EnginePositionEnum } from 'src/app/classifieds/enums/engineposition.enum';
import { FuelTypesEnum } from 'src/app/classifieds/enums/fueltypes.enum';
import { TransmissionTypeEnum } from 'src/app/classifieds/enums/transmissiontypes.enum';
import { AuctionsService } from '../../service/auctions.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-vehicle-auction-form',
  templateUrl: './vehicle-auction-form.component.html',
  styleUrls: ['./vehicle-auction-form.component.css']
})
export class VehicleAuctionFormComponent implements OnInit{
  selectedFiles: File[] = [];
  imagePreviews: string[] = [];
  vehicleAuctionForm!: FormGroup;
  @Input() businessId!: string;
  engineAspirations = Object.values(engineAspirations);
  carMakes = Object.values(CarMakes);
  bodyTypes = Object.values(BodyTypeEnum);
  driveTrains = Object.values(DriveTrainEnum);
  transmissionTypes = Object.values(TransmissionTypeEnum);
  fuelTypes = Object.values(FuelTypesEnum);
  enginePositions = Object.values(EnginePositionEnum);
  engineLayouts = Object.values(EngineLayoutEnum);
  public Editor = ClassicEditor;
  editor: Editor = new Editor();
  editorContent: any = '<p>Initial editor content</p>';

  onEditorChange(event: any) {
    this.editorContent = event;
  }

  public editorConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'link']
  };

  constructor(
    private formBuilder: FormBuilder,
    private auctionsService:AuctionsService,
    private notificationService: NotificationService
  ){}


  ngOnInit(): void {
    console.log({carMakes: this.carMakes});
    this.vehicleAuctionForm = this.formBuilder.group({
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      startingBid: ["", [Validators.required]],
      expectedReserve: ["", [Validators.required]],
      name: ["", [Validators.required]],
      price: ["", [Validators.required]],
      photos: ["", [Validators.required]],
      description: ["", [Validators.required]],
      location: ["", [Validators.required]],
      manufactureYear: ["", [Validators.required]],
      make: ["", [Validators.required]],
      model: ["", [Validators.required]],
      engineCapacity: ["", [Validators.required]],
      doorsCount: ["", [Validators.required]],
      seatCount: ["", [Validators.required]],
      mileage: ["", [Validators.required]],
      bodyType: ["", [Validators.required]],
      transmissionType: ["", [Validators.required]],
      color: ["", [Validators.required]],
      fuelType: ["", [Validators.required]],
      fuelConsumption: ["", [Validators.required]],
      driveTrain: ["", [Validators.required]],
      acceleration: ["", [Validators.required]],
      topSpeed: ["", [Validators.required]],
      engineLayout: ["", [Validators.required]],
      enginePosition: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      engineAspiration: ["", [Validators.required]],
      previousOwnersCount: ["", [Validators.required]],
      sellerType: ["", [Validators.required]],
    })
    
  }


   // Implement the method to receive the selected files
   onSelectedFilesChanged(files: File[]) {
    this.selectedFiles = files;
  }

  getContent() {
    console.log(this.editor.valueChanges);
    this.editorContent = this.editor.valueChanges;
  }


  submitVehicleAuction() {
    const values = this.vehicleAuctionForm.value;
    const formData = new FormData();
    formData.append("startDate", values.startDate);
    formData.append("endDate", values.endDate);
    formData.append("startingBid", values.startingBid);
    formData.append("expectedReserve", values.expectedReserve);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", this.editorContent);
    this.selectedFiles.forEach((photo: Blob) => {
      formData.append("photos", photo);
    });
    formData.append("location", values.location);
    formData.append("previousOwnersCount", values.previousOwnersCount.toString());
    formData.append("make", values.make);
    formData.append("model", values.model);
    formData.append("engineCapacity", values.engineCapacity.toString());
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
    if (this.businessId) {
      formData.append("businessId", this.businessId);
    }

    this.auctionsService.submitAuction(formData).subscribe(
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
