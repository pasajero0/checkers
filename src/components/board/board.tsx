import classnames from 'classnames';

import { Checker } from './checker/checker';
import { BoardProps } from './board.interface';
import { useBoard } from './board.hook';

import './board.styles.scss';

export const Board = (props: BoardProps) => {
  const [boardItems, renderBoard] = useBoard(props);

  return (
    <div className="board">
      {boardItems.map(
        renderBoard(({ index, hasChecker, isFieldDark, isCheckerBlack, isCheckerKing, onDrop, onDrag, onDragOver }) => (
          <div
            className={classnames('field', isFieldDark && 'fieldDark')}
            key={index}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            {hasChecker && <Checker isBlack={isCheckerBlack} isKing={isCheckerKing} onDragStart={onDrag} />}
          </div>
        ))
      )}
    </div>
  );
};
