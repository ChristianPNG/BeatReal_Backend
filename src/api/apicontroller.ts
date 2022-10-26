import express from "express";
import { Config } from "../shared/config";
import axios, { AxiosRequestConfig } from "axios";
import { MongoAtlasDB } from "../shared/MongoAtlasDb";

export class ApiController {
  static baseURL: string = Config.databaseConfig.url;
  static apiKey: string = Config.databaseConfig.key;
  static data: any = {
    collection: "User",
    database: "BeatReal",
    dataSource: "Cluster0",
  };
  static config: AxiosRequestConfig = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": ApiController.apiKey,
    },
    data: null,
  };

  /*
  //returns something.
  static getHello(req: express.Request, res: express.Response): void {
    ApiController.config.url = ApiController.baseURL + "/action/find";
    ApiController.config.data = ApiController.data;
    axios(ApiController.config)
      .then((response) => res.send(JSON.stringify(response.data)))
      .catch((error) => res.send(error));
  }
*/
/*
  public static async getData(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("itemlist", { hello: "world" });
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }
  */

  public static async getUsers(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("User", {});
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }

  public static async getUserId(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("User", {});
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }

  public static async getUserFriends(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("User", {});
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }

  public static async getUserReels(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("User", {});
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }

  public static async getUserCurrReel(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.find("User", {});
      res.send({ status: "ok", result: result.data.documents });
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }

  /*
  //returns whatever you post to it.  You can use the contents of req.body to extract information being sent to the server
  static postHello(req: express.Request, res: express.Response): void {
    ApiController.config.url = ApiController.baseURL + "/action/insertOne";
    ApiController.config.data = { ...ApiController.data, document: req.body };
    axios(ApiController.config)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
  */

  public static async postUser(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    const newUser = {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PhoneNumber: req.body.PhoneNumber,
      Spotify: req.body.Spotify,
      Friends: req.body.Friends,
      Reels: req.body.Reels,
      Email: req.body.Email,
      ProfilePic: req.body.ProfilePic,
      Bio: req.body.Bio 
    };
    try {
      const db = new MongoAtlasDB(
        Config.databaseConfig.dataSource,
        "BeatReal"
      );

      const result = await db.insert('User', newUser);
      res.send({ status: "ok", data: result.data});
    } catch (e) {
      console.error(e);
      res.send({ status: "error", data: e });
    }
  }
}
