import {Component, OnInit} from '@angular/core';
import {ListingService} from "../shared/listing.service";
import {Entry} from "../shared/entry.model"
import {LoggerService} from "../core/logger.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {

  listings: Entry[] = [];

  constructor(private listingService: ListingService,
              private logger: LoggerService) {
  }

  ngOnInit() {
  }

  listingData() {
    this.listingService.findAll().then((listings: any) => {
      this.listings = listings;
    }).catch((e) => {
      // TODO error handling
      this.logger.log(e);
    });
  }
}



