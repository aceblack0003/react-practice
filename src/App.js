import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUser';
import Container from 'react-bootstrap/Container';


function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const hangdleClose=()=>{
    setIsShowModalAddNew(false)
  }
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className='my-3 add-new'>
          <span><b>List Users:</b></span>
          <button className='btn btn-success'
          onClick={()=>setIsShowModalAddNew(true)}
          >Add new user</button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={hangdleClose}
      />
    </div>
  );
}

export default App;
