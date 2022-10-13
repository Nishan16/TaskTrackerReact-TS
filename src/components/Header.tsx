import react from 'react';
import "../styles.css"
function Header(){
    return(
    <>
        <div className='container'>
            <div className='header' >
                    <h1 style={{
                        padding:0,
                        margin:0,
                        font: 'Bebas Neue',
                    }}>Meeting Agenda</h1>
            </div>
  
                <button>
                    <span>New</span>
                </button>
        </div>
    </> );

}

export default Header;