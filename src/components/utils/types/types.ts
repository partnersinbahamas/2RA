export type TSize = 'small' | 'medium' | 'large';

export type IHorizontal = 'left' | 'right';
export type IVertical = 'bottom' | 'top';

export interface IAnchorOrigin {
  horizontal: IHorizontal;
  vertical: IVertical;
}

export type TStile = 'primary' | 'default' | 'mute';

export type TStatus =
  | 'online'
  | 'default'
  | 'busy'
  | 'not-here'
  | 'sleep'
  | 'primary';
export type TStringOrStatus = TStatus | string;
