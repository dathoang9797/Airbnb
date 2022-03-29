export class QuanLyVeModel {
    constructor() {
        this.deleteAt = false;
        this._id = '';
        this.checkIn = '';
        this.checkOut = '';
        this.userId = {
            tickets: [],
            deleteAt: false,
            _id: '',
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: false,
            address: '',
            type: '',
            avatar: ''
        };
        this.roomId = {
            deleteAt: false,
            _id: '',
            name: '',
            guests: 0,
            bedRoom: 0,
            bath: 0,
            description: '',
            price: 0,
            elevator: false,
            hotTub: false,
            pool: false,
            indoorFireplace: false,
            dryer: false,
            gym: false,
            kitchen: false,
            wifi: false,
            heating: false,
            cableTV: false,
            image: ''
        };
        this.__v = 0
    }
}
