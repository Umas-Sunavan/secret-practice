import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http'

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styleUrls: ['./secrets.component.sass']
})
export class SecretsComponent implements OnInit {

  result: Object = {result: 'none'}

  constructor(
    private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.getSecret().subscribe( next => {
      console.log(next);
      this.result = next
    })
  }

  getSecret = () => {
    const params = new HttpParams()
      .append('owner', 'Umas-Sunavan')
      .append('repo', 'secret-practice')
    return this.httpClient.get('/repos/Umas-Sunavan/secret-practice/actions/secrets', { params: params})
  }

}
