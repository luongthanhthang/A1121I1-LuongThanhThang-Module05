import {IStudent} from "../../models/IStudent";

export class StudentDao {
  static students: IStudent[] = [{
    id: 1,
    address: 'đà nẵng',
    avatar: 'https://i.pinimg.com/236x/cf/c1/af/cfc1af3b5ab61b8da0065d0dace258cf.jpg',
    mark: 9,
    name: 'THANH THẮNG'
  },
    {
      id: 2,
      address: 'Quảng Nam',
      avatar: 'https://i.pinimg.com/564x/f9/ec/ee/f9eceec88636932c381a60f218a13854.jpg',
      mark: 4,
      name: 'thắng thanh'
    },
    {
      id: 3,
      address: 'Quảng Nam',
      avatar: 'https://play-lh.googleusercontent.com/NnpKaUM7FXWChTBJFoz5cbpBPlV2BLSfG1ecUfJl0eFRLnntSKlJy30zwWCSasiEBvo',
      mark: 5,
      name: 'thắng lương'
    },
    {
      id: 4,
      address: 'Quảng Nam',
      avatar: 'https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-cute-girls-shop-avatar-png-image_2603683.jpg',
      mark: 7,
      name: 'Lương Thắng'
    }
  ]

  static createStudent(student: IStudent) {
    this.students.push(student);
  }
}
