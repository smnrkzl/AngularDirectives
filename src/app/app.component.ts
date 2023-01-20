import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directives';
  currentPage = 3;
  images = [
    {
      title: 'Tokyo',
      url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Barselona',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Londra',
      url: 'https://images.unsplash.com/photo-1605472074208-bd462911d2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Tokyo',
      url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Barselona',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Londra',
      url: 'https://images.unsplash.com/photo-1605472074208-bd462911d2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Tokyo',
      url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Barselona',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Londra',
      url: 'https://images.unsplash.com/photo-1605472074208-bd462911d2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Tokyo',
      url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Barselona',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Londra',
      url: 'https://images.unsplash.com/photo-1605472074208-bd462911d2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Tokyo',
      url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Paris',
      url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Barselona',
      url: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcnNlbG9uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Londra',
      url: 'https://images.unsplash.com/photo-1605472074208-bd462911d2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZHJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  PageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
