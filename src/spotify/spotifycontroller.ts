import express from "express";
import { Config } from "../shared/config";
import axios, { AxiosRequestConfig } from "axios";
import { MongoAtlasDB } from "../shared/MongoAtlasDb";
import querystring from "query-string";

function makeid(length: number) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const AUTH_URL: string = `https://accounts.spotify.com/authorize?client_id=3ecc3a4b5b974d02a9b9e12b7f2ace9b
  &response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email
  %20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export class SpotifyController {
  //   static baseURL: string = Config.databaseConfig.url;
  //   static apiKey: string = Config.databaseConfig.key;
  //   static data: any = {
  //     collection: "User",
  //     database: "BeatReal",
  //     dataSource: "Cluster0",
  //   };
  //   static config: AxiosRequestConfig = {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "api-key": ApiController.apiKey,
  //     },
  //     data: null,
  //   };

  static login(req: express.Request, res: express.Response): void {
    let state = makeid(16);
    let scope = `streaming user-read-email user-read-private user-library-read user-library-modify
    user-read-playback-state user-modify-playback-state`;
    let client_id = process.env.spotifyClientID
      ? process.env.spotifyClientID
      : "";
    let redirect_uri = process.env.spotifyRedirectURI
      ? process.env.spotifyRedirectURI
      : "";
    let authorize_url =
      "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      });

    // res.send({ status: "ok", result: authorize_url });

    res.redirect(
      authorize_url
      // "https://accounts.spotify.com/authorize?" +
      //   querystring.stringify({
      //     response_type: "code",
      //     client_id: process.env.spotifyClientID
      //       ? process.env.spotifyClientID
      //       : "",
      //     scope: scope,
      //     redirect_uri: process.env.spotifyRedirectURI
      //       ? process.env.spotifyRedirectURI
      //       : "",
      //     state: state,
      //   })
    );
  }
}
