import Image from 'next/image'

export default function Home() {
  return (
  <div>  
    
    <div className="hero min-h-content bg-cover" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-ld">
          <h1 className="mb-12 text-5xl font-bold text-white">Telusuri Tempat Wisata Halal di Cirebon Sesuai Pilihanmu!</h1>
          <p className="mb-12 text-white">Dapatkan Rekomendasi Tempat Wisata Halal Sesuai Pilihanmu..</p>
          <div className='py-10'></div>
          <div className='py-9'></div>
          <div className='py-5'>
          <button className="object-bottom btn btn-secondary text-white">Rekomendasi</button>
          </div>

        </div>
        
      </div>
    </div>
    <div className='text-center py-10'>
      <h2 className='mb-12 text-5xl font-bold text-white'>Wisata Halal Cirebon</h2>
    </div>
    <section className='flex flex-wrap justify-center' data-theme="vanila">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <figure className="px-10 pt-10">
              <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/12/788308906.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wisata 2</h2>
              <p>Wisata Halal Cirebon Batik Trusmi</p>
              <div className="card-actions">
                <button className="btn btn-primary">details</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <figure className="px-10 pt-10">
              <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/12/788308906.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wisata 2</h2>
              <p>Wisata Halal Cirebon Batik Trusmi</p>
              <div className="card-actions">
                <button className="btn btn-primary">details</button>
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <figure className="px-10 pt-10">
              <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/12/788308906.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Wisata 2</h2>
              <p>Wisata Halal Cirebon Batik Trusmi</p>
              <div className="card-actions">
                <button className="btn btn-primary">details</button>
              </div>
            </div>
          </div>
    </section>
    <div className='text-center py-10'>
      <h2 className='mb-12 text-5xl font-bold text-white'>Tentang Cirebon</h2>
    </div>

   


  </div>
  )
}
