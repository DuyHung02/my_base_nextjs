export const Role = {
  ADMIN: 'admin',
  GUEST: 'guest',
  USER: 'user',
} as const;

export type IRole = (typeof Role)[keyof typeof Role];

export type IUser = {
  id?: number;
  username?: string;
  name?: string;
  address?: string;
  avatar?: string;
  roles?: IRole[];
  user_type?: IRole;
};

export type IAuthState = {
  token?: string;
  role?: IRole;
  roles?: IRole[];
  user?: IUser;
};

export type ILogin = {
  username: string;
  password: string;
};

export type ILoginComponent = {
  onSubmit: (payload: ILogin) => void;
};

export type IResponseLogin = {
  access_token: string;
  user: IUser;
};
