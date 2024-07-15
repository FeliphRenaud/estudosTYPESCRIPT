class HotelRooms {
  [roomNumber: string]: string; // sera definida quando o objeto for criada logo abaixo
}

let room = new HotelRooms();
room.A201 = `Feliph`;
room.A202 = `Andre`;
room.A17 = `Marcos`;

console.log(room);
