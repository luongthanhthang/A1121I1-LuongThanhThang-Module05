import {ICustomer} from '../models/ICustomer';

export class CustomerDAO {
  static customers: ICustomer[] = [
    {
      id: 1,
      type: 'Member',
      name: 'Nguyễn Thị Hào',
      birthday: '1970-11-07',
      gender: 0,
      idCard: '643431213',
      phone: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng'
    },
    {
      id: 2,
      type: 'Gold',
      name: 'Phạm Xuân Diệu',
      birthday: '1992-08-08',
      gender: 1,
      idCard: '865342123',
      phone: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị'
    },
    {
      id: 3,
      type: 'Diamond',
      name: 'Trương Đình Nghệ',
      birthday: '1990-02-27',
      gender: 1,
      idCard: '488645199',
      phone: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh'
    },
    {
      id: 4,
      type: 'Diamond',
      name: 'Dương Văn Quan',
      birthday: '1981-07-08',
      gender: 1,
      idCard: '543432111',
      phone: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng'
    },
    {
      id: 5,
      type: 'Silver',
      name: 'Hoàng Trần Nhi Nhi',
      birthday: '1995-12-09',
      gender: 0,
      idCard: '795453345',
      phone: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai'
    },
    {
      id: 6,
      type: 'Silver',
      name: 'Tôn Nữ Mộc Châu',
      birthday: '2005-12-06',
      gender: 0,
      idCard: '732434215',
      phone: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng'
    },
    {
      id: 7,
      type: 'Silver',
      name: 'Tôn Nữ Mộc Châu',
      birthday: '2005-12-06',
      gender: 0,
      idCard: '732434215',
      phone: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng'
    },
    {
      id: 8,
      type: 'Diamond',
      name: 'Nguyễn Mỹ Kim',
      birthday: '1984-04-08',
      gender: 0,
      idCard: '856453123',
      phone: '0912345698',
      email: 'kimcuong84@gmail.com',
      address: 'K123/45 Lê Lợi, Hồ Chí Minh'
    }
  ];
}
