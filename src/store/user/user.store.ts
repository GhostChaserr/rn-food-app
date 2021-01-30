import { observable, action, computed, reaction } from "mobx"
import { createContext } from 'react'
import { IUser } from './user.interface'

class UserStore {
  @observable user: IUser = {}

  @action signUp = (user: IUser) => {
    this.user = user
  }

  @action signIn = (user: IUser) => {
    this.user =  user
  }

  @action logOut = () => {
    this.user = {}
  }

  @computed get me(): IUser{
    return this.user
  }
}

export default createContext(new UserStore())