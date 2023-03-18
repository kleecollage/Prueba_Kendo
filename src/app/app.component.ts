import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './shared/user';
import { catchError } from 'rxjs/operators';
import { TileUrlTemplateArgs } from '@progress/kendo-angular-map';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <kendo-map [center]="center" [zoom]="15">
      <kendo-map-layers>
        <kendo-map-tile-layer
          [subdomains]="tileSubdomains"
          [urlTemplate]="tileUrl"
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap contributors</a>"
        >
        </kendo-map-tile-layer>
        <kendo-map-marker-layer
          [data]="markers"
          locationField="latlng"
          titleField="name"
        >
        </kendo-map-marker-layer>
      </kendo-map-layers>
    </kendo-map>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Prueba_Kendo';

    public formModel: User;

    constructor(private router: Router){

      this.formModel = new User(
      0, //id
      "", //name
      new Date(2020, 1, 10), //DoB
      "", // email
      "", //st address
      "", //zipcode
      "", // multiselect
      true, //newsletter
      "male" //gender
      );


    };
    onSubmit(){
    console.log("submitting!, this.formModel");
    }


    //  //////////////////////MULTISELECTOR COMPONENT //////////////////////////////////////////////


    selectedItems: any[] = [];
    items: any[] = [
      { text: 'Item 1', value: 1 },
      { text: 'Item 2', value: 2 },
      { text: 'Item 3', value: 3 },
      { text: 'Item 4', value: 4 },
      { text: 'Item 5', value: 5 }
    ];

// --------------------------------MAP KENDO UI-------------------------------------------------------------//

tileSubdomains = ["a", "b", "c"];
  tileUrl = (e: TileUrlTemplateArgs): string =>
    `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

  center = [30.2675, -97.7409];

// ----------------------------------------------------------------------------------------------------//

  redirectToGrid() {
    this.router.navigate(['/grid']);
  }
}






  //   name: string = '';

  // constructor(private http: HttpClient) {}

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('name', this.name);

  //   this.http.post('"../app/services/insert.php', formData).subscribe(response => {
  //     console.log(response);
  //   });
  // }


