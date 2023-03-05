import { DragEventHandler } from 'react';
import classnames from 'classnames';

import { noop } from '@util/noop';

import './checker.styles.scss';

interface CheckerInterface {
  onDragStart: DragEventHandler;
  isBlack?: boolean;
  isKing?: boolean;
}

export const Checker = ({ isBlack = false, isKing = false, onDragStart = noop }: CheckerInterface) => (
  <div className={classnames('checker', isBlack && 'blackChecker')} draggable onDragStart={onDragStart}>
    <p className="innerWrapper">{isKing && '♛'}</p>
  </div>
);
