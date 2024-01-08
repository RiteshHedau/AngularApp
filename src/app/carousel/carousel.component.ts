import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Women } from '../Women';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  women:Women;

  WomenProducts:Women[]=[
    {img:'/assets/women/planty1.jpg',
    title:`Dark Assorted Hipster Pack of`,
    collection:'Soft Wonder',
    price:498.00
  },
  {img:'/assets/women/sport-bra.jpg',
  title:`Peacoat Performance Sports Bra`,
  collection:'Move',
  price:1299.00
},
{img:'/assets/women/active-bra.jpg',
  title:`Gloxinia & Black Power Black Padded Active Bra`,
  collection:'Athleisure',
  price:899.00
},
{img:'/assets/women/melange-jacket.jpg',
  title:`Ibis Rose Melange Jacket`,
  collection:'Athleisure',
  price:1799.00
},
{img:'/assets/women/tank-top.jpg',
  title:`Navy Blazer Tank Top`,
  collection:'Athleisure',
  price:499.00
},
{img:'/assets/women/capri-pants.jpg',
  title:`Navy Blazer Capri Pants`,
  collection:'Athleisure',
  price:849.00
},
];


  slickConfig = {
    'slidesToShow': 5,
    'autoplay':true,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplaySpeed":2000,
    "pauseOnHover":true,
    "responsive":[
      {
        "brakepoint":992,
        "setting":{
          "arrows":true,
          "infinite":true,
          "slidesToShow":3,
          "slidesToScroll":3
        }
      },
      {
        "brakepoint":768,
        "setting":{
          "arrows":true,
          "infinite":true,
          "slidesToShow":1,
          "slidesToScroll":1
        }
      }
    ]
  };
}
