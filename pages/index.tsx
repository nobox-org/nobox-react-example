import { Blog } from '@/types/blog';
import { FormEvent, useEffect, useRef, useState } from 'react';


export default function Home() {

  const [content, setContent] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef(null);

  const updatedContent = (data: Blog | Blog[]) => {

    if (!data) return;
    
    setContent((p)=>{
      
      if (Array.isArray(data)) return [...data, ...p];
      
      return [ data, ...p]
    }
  )};


  const loadContent = async () => {

    const res = await fetch('/api/blog');
    
    // console.log(res.statusText)

    let res_content: any;
    try {

      res_content = await res.json();
    } catch(err) {
      res_content = {error: res.statusText, code: res.status};
    }



    if (res_content.error) {
      setError(()=>res_content.error);
    } else {

      if(error) setError(null);
      updatedContent(res_content.data);
    }


    setLoading(false);
  }


  

  const handleAddItem = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;


    const inputElem = inputRef.current as HTMLTextAreaElement;

    // console.log(inputElem.value);

    setError(null);

    // Send data to nobox
    fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ data: inputElem.value })
    }).then((res)=>res.json()).then((data)=>{


      updatedContent(data);
      
      inputElem.value = "";

    }).catch(err=> {
      console.error(err);

      setError(()=>"Could not make post");
    });
  }


  useEffect(()=>{
    (()=>{
      if (content.length > 1) return;
      loadContent()
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, loading, error]);


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


      {/* Add content */}
      <section className='container'>

        <form className='form-group d-block' onSubmit={handleAddItem}>

          <textarea
            className='bg-elem border-none d-block mb-1 p-1'
            placeholder="What's on your mind?"
            name='newContent'
            ref={inputRef}
            required
          />
          <button type="submit" className='btn fw-600 text-light bg-dark border-none box-shadow'>Post</button>
        </form>

      </section>


      <br/>
      <br/>
      {/* Content */}
      <section className='container'>


        <p className='fw-600 fs-18'>
          { loading ? "Loading..." : error }
        </p>
        {          
          content.map((item)=>(
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
