export type TContext = {
  shouldStop?: boolean;
  data: string;
}

export type THandler = (ctx: TContext, next: () => Promise<void>) => Promise<void>;

export type TQueue = {
  handlers: THandler[],
  add: (handler: THandler) => void,
  run: (ctx:TContext) => Promise<void>
}

export const Queue: TQueue = {
  handlers: [],
  add: (handler: THandler) => {
    Queue.handlers.push(handler)
  },
  run: async (ctx: TContext) => {
    let index = -1;

    const dispatch = async (i: number): Promise<void> => {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;

      const handler = Queue.handlers[i];
      if (!handler || ctx.shouldStop === true) return;

      await handler(ctx, () => dispatch(i + 1));
    };

    console.log('Initialize :>> ',);
    await dispatch(0);
  }
}