import { TestBed, inject } from '@angular/core/testing';
import { ApiclientPage } from 'src/app/pages/apiclient/apiclient.page';
import { HttpBackend, HttpClient} from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { APIClientService } from './apiclient.service';

describe('ApiclientService', () => {
    let service: APIClientService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [APIClientService]
        });

        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.inject(APIClientService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('exists', inject([APIClientService], () => {
        expect(service).toBeTruthy();
    }));
});
