import { Component } from '@angular/core';
import { Step6SimpleDatatable } from '../step6-simple-datatable/step6-simple-datatable';
import { Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step6-simple-datatable-show',
  imports: [Step6SimpleDatatable],
  templateUrl: './step6-simple-datatable-show.html',
  styleUrl: './step6-simple-datatable-show.css',
})
export class Step6SimpleDatatableShow {
  persons: Person[] = [
    {"firstname":"Ryon","lastname":"McRinn","email":"rmcrinn0@infoseek.co.jp"},
    {"firstname":"Nestor","lastname":"Seeman","email":"nseeman1@bbc.co.uk"},
    {"firstname":"Loise","lastname":"Bassick","email":"lbassick2@addtoany.com"},
    {"firstname":"Murry","lastname":"Holmyard","email":"mholmyard3@toplist.cz"},
    {"firstname":"Gianni","lastname":"Soares","email":"gsoares4@yahoo.com"},
    {"firstname":"Adler","lastname":"Thunderman","email":"athunderman5@weibo.com"},
    {"firstname":"Charley","lastname":"Bedell","email":"cbedell6@bbb.org"},
    {"firstname":"Amii","lastname":"Heasley","email":"aheasley7@meetup.com"},
    {"firstname":"Cristian","lastname":"Laffan","email":"claffan8@yelp.com"},
    {"firstname":"Madelin","lastname":"Antognazzi","email":"mantognazzi9@cbsnews.com"},
    {"firstname":"Aurel","lastname":"Marthen","email":"amarthena@cdbaby.com"},
    {"firstname":"Jackquelin","lastname":"Huerta","email":"jhuertab@sohu.com"},
    {"firstname":"Allie","lastname":"Dunstan","email":"adunstanc@trellian.com"},
    {"firstname":"Rube","lastname":"Pioli","email":"rpiolid@gmpg.org"},
    {"firstname":"Zollie","lastname":"Annand","email":"zannande@foxnews.com"},
    {"firstname":"Prentice","lastname":"Vaneschi","email":"pvaneschif@businessweek.com"},
    {"firstname":"Gilberte","lastname":"Teresa","email":"gteresag@twitpic.com"},
    {"firstname":"Jacenta","lastname":"Rance","email":"jranceh@studiopress.com"},
    {"firstname":"Gertie","lastname":"Dannett","email":"gdannetti@hubpages.com"},
    {"firstname":"Fedora","lastname":"Stork","email":"fstorkj@shutterfly.com"}
  ]
}