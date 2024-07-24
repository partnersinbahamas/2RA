import PropsTypes from 'prop-types';
import classNames from 'classnames';

import { useHD } from '../../providers/HDProvider';
import useModuleExtention from '../../hooks/useModuleExtention';

import TArticleProps from '../utils/types/props/article';
import { numberFixTo } from '../utils/functions';
import defaultProps from '../utils/variables/defaultProps';
import { TStile } from '../utils/types/types';
import styles from './DisplayCount.module.scss';

type TProps = {
  text: string;
  x: number | string;
  y: number | string;
  fixTo?: string;
  stile?: TStile;
  className?: any;
};

const DisplayCount: React.FC<TProps> = ({
  text,
  x,
  y,
  fixTo,
  stile = defaultProps.stile,
  className,
}) => {
  const { stylesExtention } = useHD();
  const modulesExtension = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const modifiedX = fixTo?.length ? numberFixTo(x, fixTo) : x;
  const modifiedY = fixTo?.length ? numberFixTo(y, fixTo) : y;

  const modifiedText = text
    .replace(/\bX+\b/g, `<strong>${modifiedX}</strong>`)
    .replace(/\bY+\b/g, `<strong>${modifiedY}</strong>`);

  const messageHTML = { __html: modifiedText };

  return (
    <article dangerouslySetInnerHTML={messageHTML} />
  );
};

DisplayCount.propTypes = {
  text: PropsTypes.string.isRequired,
  x: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]).isRequired,
  y: PropsTypes.oneOfType([PropsTypes.number, PropsTypes.string]).isRequired,
  fixTo: PropsTypes.string,
  className: PropsTypes.any,

  // any cause null not exist in PropsTypes
  stile: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.any]),
};

export default DisplayCount;
