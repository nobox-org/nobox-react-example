// import { Inter } from 'next/font/google';
import data from '@/data/blog.json';



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`min-h-screen p-24`}
    >
      {/* Header */}
      <header className='text-center'>
        <h1 className='fw-800'>MyCri</h1>
      </header>
      <br/>
      <br/>
      <br/>
      <section className='container'>

        <div className='form-group'>

          <textarea
            className='bg-elem border-none d-block mb-1 p-1'
            placeholder="What's on your mind?"
          />
          <button className='btn fw-600 text-light bg-dark border-none box-shadow'>Post</button>
        </div>

      </section>


      <br/>
      <br/>
      {/* Content */}
      <section className='container'>
        {
          data.map((item)=>(
            <article key={item.id}>
              <small className='text-bold fw-300 fs-12'>
                
                <span>By unknown user</span>
                <span className='dot-sep'>&#183;</span>
               <span>2 mins ago</span>

              </small>


              <p className='fw-600 fs-16'>{item.content}</p>
            </article>
          ))
        }
      </section>
      {/* Footer */}
    </main>
  )
}
