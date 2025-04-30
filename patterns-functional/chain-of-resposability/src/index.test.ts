import {Queue} from "./utils/queue";

describe('Chain of Responsability', () => {
  it('should add elements in Queue', async () => {
    Queue.add( async(ctx, next) => {
      console.log('Step 1 :>> ', ctx);

      if ( ctx.data === 'step1' ){
        ctx.shouldStop = true
      }

      await next()
    })

    Queue.add( async(ctx, next) => {
      console.log('Step 2 :>> ', ctx);
      if ( ctx.data === 'step2' ){
        ctx.shouldStop = true
      }

      await next()
    })
    
    Queue.add( async(ctx, next) => {
      console.log('Step 3 :>> ', ctx);
      if ( ctx.data === 'step3' ){
        ctx.shouldStop = true
      }

      await next()
    })

    expect(Queue.handlers).toHaveLength(3)
  })
  
  it('should run only 1 step on the queue', async () => {
    Queue.run({data: 'step1'})
  })
  
  it('should run until 2 step on the queue', async () => {
    Queue.run({data: 'step2'})
  })
  
  it('should run all steps on the queue', async () => {
    Queue.run({data: ''})
  })
  
});