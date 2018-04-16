import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase  } from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database/interfaces';
import {IWeatherRegion} from '../models/i-weather-region';


@Injectable()
export class PreviewSearchService {
  constructor(private http: HttpClient,
              private afdb: AngularFireDatabase) {
  }

  autoCompleteOptions: IWeatherRegion[] = [];
  option: AngularFireList<any>;

  search(prefix: string): IWeatherRegion[] {
    // .....WORKING CODE....
    // this.option = this.afdb.object('Stavropol, RU');
    // this.option.snapshotChanges()
    //   .subscribe(data => {
    //     console.log(data);
    //     console.log(data.key);
    //     /// id!!!!
    //     console.log(data.payload.val());
    //     /// id!!!!
    //   });
    // .....WORKING CODE....

    const cities: IWeatherRegion[] = [];
    // .....WORKING CODE....
    this.option = this.afdb.list('/');

    this.option.query.orderByKey()
      .startAt(prefix).endAt(`${prefix}\uf8ff`)
      .limitToFirst(6)
      .on('child_added', function (snapshot) {
        console.log(snapshot.key);
        console.log(snapshot.val());

        cities.push({
          region: snapshot.key,
          id: snapshot.val()
        });
      });
    // .....WORKING CODE....

    this.autoCompleteOptions = cities;
    console.log(this.autoCompleteOptions);

    return this.autoCompleteOptions;
  }

}
