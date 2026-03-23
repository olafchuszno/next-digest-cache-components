'use client';

import type { FC } from 'react';

type Props = {
  serverAction: () => Promise<void>;
  anotherServerAction: () => Promise<void>;
};

export const CallServerProp: FC<Props> = ({
  serverAction,
  anotherServerAction,
}) => {
  return (
    <div className="flex gap-2">
      <button className="client-border client-text" onClick={serverAction}>
        Call server action
      </button>
      <button
        className="client-border client-text"
        onClick={anotherServerAction}
      >
        Call another server action
      </button>
    </div>
  );
};
