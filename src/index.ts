// import { Client } from 'pg';

// export class DBService {
//   private _user: string;
//   private _host: string;
//   private _database: string;
//   private _password: string;
//   private _port: number;

//   constructor(user: string, host: string, database: string, password: string, port: string = '5432') {
//     this._user = user;
//     this._host = host;
//     this._database = database;
//     this._password = password;
//     this._port = parseInt(port, 10);
//   }

//   async connectDB(): Promise<Client> {
//     const rds: Client = new Client({
//       user: this._user,
//       host: this._host,
//       database: this._database,
//       password: this._password,
//       port: this._port,
//     });

//     await rds.connect();

//     return rds;
//   }

//   async connectReadonlyDB(): Promise<Client> {
//     const rds: Client = new Client({
//       user: this._user,
//       host: this._host,
//       database: this._database,
//       password: this._password,
//       port: this._port,
//     });

//     await rds.connect();

//     return rds;
//   }

//   async disconnect(client: Client): Promise<any> {
//     await client.end();
//   }
// }

export const Greeter = (name: string) => `Hello ${name}`;
