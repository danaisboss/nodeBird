import * as dotenv from "dotenv"
dotenv.config()

type config = {
  username: string,
  database: string,
  password: string,
  host: string,
  [key:string]: string
}

interface IconfigGroup {
  "development" : config;
  "test": config;
  "production": config;
}

const config: IconfigGroup  = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

export default config
