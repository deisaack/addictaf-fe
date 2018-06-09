import {HttpHeaders} from '@angular/common/http';

// export const baseUrl = 'http://127.0.0.1:7000/';
// export const baseUrl = 'http://192.168.43.65:7000/';
export const baseUrl = 'https://api.addictaf.com/';
export const liveUrl = window.location.origin + '/';
// export const baseUrl = 'https://adictaf.herokuapp.com/';

export const authenticatedHttpOptions = {
  headers: new HttpHeaders(getAuthToken())
};

export const unauthenticatedHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

function getAuthToken () {
  const user = localStorage.getItem('user');
  const obj = JSON.parse(user);
  if (obj === null) {
    return {'Content-Type': 'application/json'};
  }
  return {'Content-Type': 'application/json', 'Authorization': 'Token ' + obj['token']};
}
