function Nav() {

    return (
      <>
      
        <div className='container-fluid'>
          <div className="flex justify-center py-3 bg-gray-950">
            <input className="bg-black py-3 px-10 text-white rounded-md" type="search" name="" id="" placeholder="Brows Animals"/>
          </div>
          <ul className='flex gap-3 py-3 justify-center  text-white' >
            <li><a href="">Care Guide</a></li>
            <li><a href="">Best Pet For You</a></li>
            <li><a href="">Fing Suppliers</a></li>
            <li><a href="">Build a Habitat</a></li>
          </ul>
        </div>
      </>
    )
  }
  
  export default Nav