/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

// export type AppScreenProps<RouteName extends keyof AppStackParamList> =
//   NativeStackScreenProps<AppStackParamList, RouteName>;

  export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
