import {IFacility} from '../models/IFacility';


export class FacilityDAO {
  static facilities: IFacility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      rentType: 'Room',
      serviceType: 'Year',
      standardRoom: 'Vip',
      description: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Vip',
      description: 'Có thêm bếp nướng',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      id: 3,
      name: 'Room Twin 01',
      area: 5000,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg'
    },
    {
      id: 4,
      name: 'Villa No Beach Front',
      area: 22000,
      cost: 9000000,
      maxPeople: 8,
      rentType: 'Villa',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có hồ bơi',
      poolArea: 300,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
    },
    {
      id: 5,
      name: 'House Princess 02',
      area: 10000,
      cost: 4000000,
      maxPeople: 5,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Normal',
      description: 'Có thêm bếp nướng',
      poolArea: 300,
      numberOfFloor: 2,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Garden-Deluxe-twin-bed-F-370x239.jpg'
    },
    {
      id: 6,
      name: 'Room Twin 02',
      area: 3000,
      cost: 900000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 300,
      numberOfFloor: 2,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg'
    },
    {
      id: 7,
      name: 'Villa Beach Front 02',
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      rentType: 'Room',
      serviceType: 'Year',
      standardRoom: 'Vip',
      description: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloor: 4,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg'
    },
    {
      id: 8,
      name: 'House Princess 03',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: 'House',
      serviceType: 'Month',
      standardRoom: 'Vip',
      description: 'Có thêm bếp nướng',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg'
    },
    {
      id: 9,
      name: 'Room Twin 03',
      area: 5000,
      cost: 1000000,
      maxPeople: 2,
      rentType: 'Room',
      serviceType: 'Day',
      standardRoom: 'Normal',
      description: 'Có tivi',
      poolArea: 500,
      numberOfFloor: 3,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    }
  ];
}
