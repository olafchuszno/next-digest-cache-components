import { CallServerProp } from './CallServerProp';

export default async function Page() {
  const logHello = async () => {
    'use server';
    console.log('---- Hello ----');
  };
  const logBye = async () => {
    'use server';
    console.log('---- Bye ----');
  };

  return (
    <main>
      <CallServerProp serverAction={logHello} anotherServerAction={logBye} />
    </main>
  );
}
