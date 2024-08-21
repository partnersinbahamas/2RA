import PropsTypes from 'prop-types';
import classNames from 'classnames';

import { useRA } from '../../providers/RAProvider';
import useModuleExtention from '../../hooks/useModuleExtention';

import TArticleProps from '../utils/types/props/article';
import { numberFixTo } from '../utils/functions';
import { TStile } from '../utils/types/types';
import styles from './DisplayCount.module.scss';

type TProps = TArticleProps & {
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
  stile,
  className,
}) => {
  const { stylesExtention, componentsStile } = useRA();
  const modulesExtension = useModuleExtention(
    stylesExtention as TStylesExtension,
  ).moduleExtentionState;

  const visibleStile = stile || componentsStile;

  const modifiedX = fixTo?.length ? numberFixTo(x, fixTo) : x;
  const modifiedY = fixTo?.length ? numberFixTo(y, fixTo) : y;

  const stiles = {
    article: styles[`article-${visibleStile}`],
    variables: styles[`article-${visibleStile}-variables`],
    x: styles[`article-${visibleStile}-x`],
    y: styles[`article-${visibleStile}-y`],
  };

  const classes = {
    displayCount:
      className && modulesExtension ? className.displayCount : className,
    variables:
      className && modulesExtension
        ? className['displayCount-variables']
        : `${className}-variables`,
    x:
      className && modulesExtension
        ? className['displayCount-x']
        : `${className}-x`,
    y:
      className && modulesExtension
        ? className['displayCount-y']
        : `${className}-y`,
  };

  const modifiedText = text
    .replace(
      /\bX+\b/g,
      `<strong class="${stiles.x} ${stiles.variables} ${classes.variables} ${classes.x}" data-testid="displayCount-x">${modifiedX}</strong>`,
    )
    .replace(
      /\bY+\b/g,
      `<strong class="${stiles.y} ${stiles.variables} ${classes.variables} ${classes.y}" data-testid="displayCount-y">${modifiedY}</strong>`,
    );

  const messageHTML = { __html: modifiedText };

  return (
    <article
      className={classNames(stiles.article, classes.displayCount)}
      dangerouslySetInnerHTML={messageHTML}
    />
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
