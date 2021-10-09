import {debounce} from 'lodash';
import { useFetchSearch } from './useFetchSearch'

export const useDebouce = (func,timeout) => {
   return  debounce(() => {func()} , timeout);
}