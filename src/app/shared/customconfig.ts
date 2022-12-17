import { Config } from '../shared/config';
import { Injectable } from '@angular/core';
@Injectable()
export class CustomConfig extends Config{
    override bdUrl="http://localhost:3000";
}