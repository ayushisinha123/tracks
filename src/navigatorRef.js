import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    if (navigator) {
    navigator.dispatch(
      CommonActions.navigate({ name: routeName, params })
    );
  }
}
