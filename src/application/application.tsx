import 'css-reset-and-normalize';
import '@style/main.scss';
import { Board } from '@component/board/board';

const MY_FEN = '.w.w.w....w......W.b.W.............B..........b....b....b.......';

export const Application = () => (
  <div className="app">
    <Board fen={MY_FEN} />
  </div>
);
