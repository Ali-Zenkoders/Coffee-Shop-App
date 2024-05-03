// for creating store
import {create} from 'zustand';
// for update deeply nested object
import {produce} from 'immer';
// for presist data
import {persist, createJSONStorage} from 'zustand/middleware';
// for mobile cache and mobile storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
