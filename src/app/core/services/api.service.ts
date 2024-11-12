import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '@environment';

import { NotificationUtility } from '@app/shared/utilities';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    get headers() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    get<T>(url: string): Observable<T> {
        return this.httpClient
            .get<T>(`${environment.baseUrl}/${url}`, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.httpClient
            .post<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.httpClient
            .put<T>(`${environment.baseUrl}/${url}`, data, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    delete<T>(url: string): Observable<T> {
        return this.httpClient
            .delete<T>(`${environment.baseUrl}/${url}`, { headers: this.headers })
            .pipe(catchError((error) => this._handleError(error)));
    }

    postFile<T>(url: string, files: File[]): Observable<T> {
        const formData = new FormData();

        for (const file of files) {
            formData.append(file.name, file, file.name);
        }

        return this.httpClient
            .post<T>(`${environment.baseUrl}/${url}`, formData, { headers: this.headers, reportProgress: true })
            .pipe(catchError((error) => this._handleError(error)));
    }

    private _handleError(error: HttpErrorResponse) {
        switch (error.status) {
            case HttpStatusCode.Forbidden:
                NotificationUtility.error('You do not have permission to access this resource');
                break;
            case HttpStatusCode.InternalServerError:
                NotificationUtility.error('Internal server error');
                break;
            case HttpStatusCode.NotFound:
                NotificationUtility.error('Resource not found');
                break;
            case HttpStatusCode.BadRequest:
                NotificationUtility.error(error.error.message);
                break;
            default:
                break;
        }

        return throwError(() => error);
    }
}
