import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
}
