import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { UserModel } from '@/nobox/record-structures/user';
import { AppDetailsModel } from '@/nobox/record-structures/app-details';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addSampleUser = async () => {
    setIsLoading(true);

    const user = await UserModel.insertOne({
      firstName: 'akin',
      email: 'akin@gmail.com',
      age: 20,
      password: "123456",
      made: false
    });

    const updatedUser = await UserModel.updateOneById(user.id, {
      age: 18
    });


    const userOne = await UserModel.findOne({
      email: 'akin@gmail.com',
      password: "123456"
    })

    console.log({ userOne })

    const res = await UserModel.search({
      searchableFields: ['firstName', 'email'],
      searchText: 'akin'
    });

    console.log({ res })

    const res2 = await UserModel.search({
      searchableFields: ["age", 'email'],
      searchText: 'De'
    });

    console.log({ res2 })


    const hey = await AppDetailsModel.setKeys({
      name: 'Akin',
      platform: " web",
      language: "typescript"
    })

    console.log({ hey })

    const hi = await AppDetailsModel.getKeys();

    console.log({ hi })

    const ju = await AppDetailsModel.setKeys({
      name: 'Akintunde',
    });


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
          (users || []).map((user,i) => {
            return (
              <p key={i} className="w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 mb-5">
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
