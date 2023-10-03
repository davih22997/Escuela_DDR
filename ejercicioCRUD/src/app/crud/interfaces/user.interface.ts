import { Gif } from "src/app/gifs/interfaces/gifs.interfaces";

export interface User {
  id:           string,

  email:        string,
  name:         string,
  password:     string,

  favGif:         Gif | undefined
}

