import english from './en';
import chinese from './zh';
import french from './fr';
import finnish from './fi';
import swedish from './sv';
import vietnam from './vi';

type Translation = {
  PageSize: string;
  PageOrientation: string;
  Format: string;
  DPI: string;
  Generate: string;
}

export {
  english,
  french,
  finnish,
  swedish,
  vietnam,
  Translation,
  chinese,
};
