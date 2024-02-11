import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {RootState} from "../store/reducers.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
