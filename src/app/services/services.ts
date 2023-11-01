import { Injectable, inject } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: "root"
})

export class Services {
  async getGithubData() { 
    try {
      return await axios.get("http://localhost:8080").then( (response) => response.data);
    } catch(e) {
      console.log(e);
    }
  }
}