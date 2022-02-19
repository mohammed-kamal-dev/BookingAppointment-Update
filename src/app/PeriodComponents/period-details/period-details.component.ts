import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-period-details',
  templateUrl: './period-details.component.html',
  styleUrls: ['./period-details.component.sass']
})
export class PeriodDetailsComponent implements OnInit {
  public result: any;

  constructor(private repo: RepositoryService,private activeRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.consumeGetFromRepository();
  }

  public consumeGetFromRepository() {
    let id: string = this.activeRoute.snapshot.params['id'];
    this.repo.getData(`api/Periods/${id}`)
      .subscribe(res => {
        this.result = res as any;
      })
  }
}
