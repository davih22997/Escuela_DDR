import { Gif } from "src/app/gifs/interfaces/gifs.interfaces";

export enum CreationState {
  Created,
  NotCreated,
  WaitToCreate
}

export interface User {
  id:           string,

  email:        string,
  name:         string,
  password:     string,

  favGifUrl:       string | undefined
}


