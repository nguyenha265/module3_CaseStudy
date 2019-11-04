import {Injectable} from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkLogin = 'true';
  checkRegister = 'true';
  userOnline: User = {
    name: 'kero',
    email: 'kero@gmail.com',
    pass: '123456',
    age: 300,
    address: 'bac ninh',
    // tslint:disable-next-line:max-line-length
    image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/17203169_1261001370632148_6311348364328127501_n.jpg?_nc_cat=110&_nc_oc=AQljFz-SFDF_fEQLLn3dYUlLjJ_XQzup8oGsY0_b8vAT91w_btTLVXmR3QIYA01zVMo&_nc_ht=scontent.fhan3-1.fna&oh=e32c2219b9180cb539d054cf1e9e7814&oe=5E6569A5',
    status: false
  };


  user: User[] = [
    {
      name: 'kero',
      email: 'kero@gmail.com',
      pass: '123456',
      age: 300,
      address: 'bac ninh',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/17203169_1261001370632148_6311348364328127501_n.jpg?_nc_cat=110&_nc_oc=AQljFz-SFDF_fEQLLn3dYUlLjJ_XQzup8oGsY0_b8vAT91w_btTLVXmR3QIYA01zVMo&_nc_ht=scontent.fhan3-1.fna&oh=e32c2219b9180cb539d054cf1e9e7814&oe=5E6569A5',
      status: false
    },
    {
      name: 'sakura',
      email: 'sakura@gmail.com',
      pass: '123456',
      age: 18,
      address: 'tokyo',
      // tslint:disable-next-line:max-line-length
      image: 'http://img.phimvtv.com/film/25060/thu-linh-the-bai-sakura-phan-2.poster.jpg?2019',
      status: false
    },
    {
      name: 'Đại',
      email: 'dai@gmail.com',
      pass: '123456',
      age: 18,
      address: 'nghệ an',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/18342454_806315982858951_6931357994715639204_n.jpg?_nc_cat=110&_nc_oc=AQnyub6xeDQ0MZQeuLX8mej5Oqa5oQG-2MtzZifNzXWkPh65MMsNqzICI5h16nJwMwQ&_nc_ht=scontent.fhan5-2.fna&oh=8c65589494c28c0e5648955468c8d48d&oe=5E608BF1',
      status: false
    },
    {
      name: 'tiến',
      email: 'tien@gmail.com',
      pass: '123456',
      age: 18,
      address: 'hà nội',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/72268864_201173680886934_31836153023823872_n.jpg?_nc_cat=106&_nc_oc=AQmBGfgrdlkdNGGd8lXfRckP55yfKR0qEcrSlOpG0bSDCYPATP4Jd8Aad3t5t0JxRCs&_nc_ht=scontent.fhan5-3.fna&oh=c21346f32d3f264a24c69889fd9608a1&oe=5E491CDB',
      status: false
    },
    {
      name: 'công',
      email: 'công@gmail.com',
      pass: '123456',
      age: 24,
      address: 'hà nội',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/61456928_368108007386902_2285915542076260352_n.jpg?_nc_cat=109&_nc_oc=AQkaSRQfdY4XBcxAJ2mDXFovuD75nPt34TdEFld6DKI7jmvO2iu7Kubo1NiETQIzPj8&_nc_ht=scontent.fhan5-1.fna&oh=31415fa1a12f9c08a0ffbde59537296a&oe=5E6522AE',
      status: false
    },
    {
      name: 'linh',
      email: 'linh@gmail.com',
      pass: '123456',
      age: 24,
      address: 'sài gòn',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-9/69771021_2216904768438996_936882712587796480_n.jpg?_nc_cat=104&_nc_oc=AQna0LA2izpCfgfYs2XdzH4jD_sEHStjWgOn3Ur8XrOFSJ19G_510NFysdvLWOZLGWI&_nc_ht=scontent.fhan5-4.fna&oh=b1136ee2a881d80370296d6fc1d4ce67&oe=5E1F05B3',
      status: false
    },
    {
      name: 'huyền',
      email: 'huyen@gmail.com',
      pass: '123456',
      age: 18,
      address: 'hòa bình',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/74218576_2410521729202943_7300012628607238144_o.jpg?_nc_cat=103&_nc_oc=AQlDpJ6ceRJAWWmocaeOVqOKkGYoMiyXN-D15z4v2ZPEXFSY8pUvD4cC5ad9nD1rNEQ&_nc_ht=scontent.fhan5-7.fna&oh=016f76d3c0703637889bf0b2b0ec522b&oe=5E61E70E',
      status: false
    },
    {
      name: 'quân',
      email: 'quan@gmail.com',
      pass: '123456',
      age: 18,
      address: 'hà nội',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/18557132_457763997894864_854813398645116140_n.jpg?_nc_cat=106&_nc_oc=AQnoZ43SdVl31pVzZhBqsKelfC6kXJCivEZBwI2CzTodRnvJWsgRLt9t5qH1BGAC3x4&_nc_ht=scontent.fhan3-3.fna&oh=a59dc086fec3f46e1c3424825557e87a&oe=5E4FA544',
      status: false
    },
    {
      name: 'hoang tử gió',
      email: 'phong@gmail.com',
      pass: '123456',
      age: 25,
      address: 'hà nội',
      // tslint:disable-next-line:max-line-length
      image: 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/12718285_874360809347291_8912808830764451626_n.jpg?_nc_cat=102&_nc_oc=AQlr345UB0eryvArrEP9ynBb3wjImDnsKRFpUf39iPuad0ezsRMQ4iVk8dbI12Vjeno&_nc_ht=scontent.fhan3-1.fna&oh=cddc42a74189e153a7509eb29bffb33b&oe=5E1B5194',
      status: false
    },
  ];

  CheckUsre(email: string): User {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return this.user[i];
      }
    }
  }


  CheckEmailExists(email: string): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].email === email) {
        return false;
      } else {
        return true;
      }
    }
  }

  constructor() {
  }
}
