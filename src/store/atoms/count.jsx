import { atom } from 'recoil';

export const countAtom = atom({
  key: 'countAtom', // unique ID (with respect to other atoms/selectors)
  default: 0,       // default value (aka initial value)
});
