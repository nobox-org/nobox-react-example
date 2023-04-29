import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { UserModel } from '@/nobox/record-structures/user';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addSampleUser = async () => {
    setIsLoading(true);

    const user = await UserModel.insertOne({
      firstName: 'John Doe',
      email: 'akin@gmail.com',
      age: 20,
      password: "123456"
    })

    await getAndSetSampleUsers();

    setIsLoading(false);

    return user;
  }

  const getAllSampleUsers = async () => {
    const users = await UserModel.find({}, {
      sort: {
        order: 'desc',
        by: 'id'
      }
    })
    return users;
  }

  const getAndSetSampleUsers = async () => {
    const sampleUsers = await getAllSampleUsers()
    setUsers(sampleUsers as any);
  }


  useEffect(() => {
    getAndSetSampleUsers()
  }, []);

  return (
    <main
      className={`min-h-screen p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">

        <button onClick={() => addSampleUser()} title='AddUser' style={{ color: "red", margin: "0 10px 10px 0", fontSize: "20px", border: "2px blue solid", padding: "10px" }}> Add User <code style={{ fontSize: "10px" }}>{isLoading && `loading...`}</code></button>

        {
          users.map((user) => {
            return (
              <p className="w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-5">
                <code className="font-mono font-bold" style={{
                  padding: "10px",
                  whiteSpace: 'pre-wrap'
                }}>
                  {JSON.stringify(user, null, 2)}
                </code>
              </p>
            )
          })
        }
      </div>

    </main>
  )
}
