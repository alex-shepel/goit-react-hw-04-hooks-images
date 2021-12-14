import { useEffect, useState } from 'react';
import * as pixabay from 'services/pixabay-api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import ModalLoader from 'components/ModalLoader';
import s from './App.module.css';
import Modal from 'components/Modal';

const View = {
  EMPTY: 'empty',
  LOADING: 'loading',
  NORMAL: 'normal',
  END: 'end',
  MODAL: 'modal',
};

const App = () => {
  const [images, setImages] = useState([]);
  const [view, setView] = useState(View.LOADING);
  const [backupView, setBackupView] = useState('');
  const [modalImageURL, setModalImageURL] = useState('');

  useEffect(() => {
    const promiseCallback = () => pixabay.fetch();
    const thenCallback = images => {
      setImages(images);
      setView(View.NORMAL);
    };

    handleLoading(promiseCallback, thenCallback);
  }, []);

  const handleSubmit = query => {
    const promiseCallback = () => pixabay.fetch(query);
    const thenCallback = images => {
      setImages(images);
      setView(View.NORMAL);
    };
    handleLoading(promiseCallback, thenCallback);
  };

  const handleLoadMore = () => {
    const promiseCallback = pixabay.nextPage;
    const thenCallback = images => {
      setImages(prev => [...prev.images, ...images]);
      setView(View.NORMAL);
    };

    handleLoading(promiseCallback, thenCallback);
  };

  const handleLoading = (promiseCallback, thenCallback) => {
    setBackupView(view);
    setView(View.LOADING);

    promiseCallback()
      .then(thenCallback)
      .then(() => setView(View.NORMAL))
      .catch(handleFetchError);
  };

  const handleFetchError = err => {
    if (err.message === pixabay.Messages.COLLECTION_END) {
      setView(View.END);
      return;
    }

    if (err.message === pixabay.Messages.NO_MATCHES) {
      setImages([]);
      setView(View.EMPTY);
      return;
    }

    console.log(err.message);
    setView(backupView);
  };

  const handleModalClose = () => {
    setView(backupView);
  };

  const handleItemClick = id => {
    setBackupView(view);
    setModalImageURL(images.find(img => img.id === id).largeImageURL);
    setView(View.MODAL);
  };

  return (
    <main className={s.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery onItemClick={handleItemClick} images={images} />

      {view === View.EMPTY && <p>There are no matching images.</p>}

      {view === View.NORMAL && <Button onClick={handleLoadMore} />}

      {view === View.END && <p>You've reached the collection end.</p>}

      {view === View.LOADING && <ModalLoader color={'#3f51b5'} />}

      {view === View.MODAL && (
        <Modal url={modalImageURL} onClose={handleModalClose} />
      )}
    </main>
  );
};

// class App extends Component {
//   state = {
//     images: [],
//     view: View.LOADING,
//     backupView: '',
//     modalImageURL: '',
//   };
//
//   componentDidMount() {
//     const promiseCallback = () => pixabay.fetch();
//     const thenCallback = images => this.setState({ images, view: View.NORMAL });
//
//     this.handleLoading(promiseCallback, thenCallback);
//   }
//
//   handleSubmit = query => {
//     const promiseCallback = () => pixabay.fetch(query);
//     const thenCallback = images => this.setState({ images, view: View.NORMAL });
//
//     this.handleLoading(promiseCallback, thenCallback);
//   };
//
//   handleLoadMore = () => {
//     const promiseCallback = pixabay.nextPage;
//     const thenCallback = images => {
//       this.setState(prevState => ({
//         images: [...prevState.images, ...images],
//         view: View.NORMAL,
//       }));
//     };
//
//     this.handleLoading(promiseCallback, thenCallback);
//   };
//
//   handleLoading = (promiseCallback, thenCallback) => {
//     this.setState(prevState => {
//       return {
//         backupView: prevState.view,
//         view: View.LOADING,
//       };
//     });
//
//     promiseCallback()
//       .then(thenCallback)
//       .then(() => this.setState({ view: View.NORMAL }))
//       .catch(this.handleFetchError);
//   };
//
//   handleFetchError = err => {
//     if (err.message === pixabay.Messages.COLLECTION_END) {
//       this.setState({ view: View.END });
//       return;
//     }
//
//     if (err.message === pixabay.Messages.NO_MATCHES) {
//       this.setState({
//         images: [],
//         view: View.EMPTY,
//       });
//       return;
//     }
//
//     console.log(err.message);
//     this.setState(prevState => ({ view: prevState.backupView }));
//   };
//
//   handleModalClose = () => {
//     this.setState(prevState => ({ view: prevState.backupView }));
//   };
//
//   handleItemClick = id => {
//     this.setState(prevState => ({
//       backupView: prevState.view,
//       modalImageURL: prevState.images.find(img => img.id === id).largeImageURL,
//       view: View.MODAL,
//     }));
//   };
//
//   render() {
//     const { images, view, modalImageURL } = this.state;
//     const { LOADING, NORMAL, END, MODAL, EMPTY } = View;
//
//     return (
//       <main className={s.App}>
//         <Searchbar onSubmit={this.handleSubmit} />
//         <ImageGallery onItemClick={this.handleItemClick} images={images} />
//
//         {view === EMPTY && <p>There are no matching images.</p>}
//
//         {view === NORMAL && <Button onClick={this.handleLoadMore} />}
//
//         {view === END && <p>You've reached the collection end.</p>}
//
//         {view === LOADING && <ModalLoader color={'#3f51b5'} />}
//
//         {view === MODAL && (
//           <Modal url={modalImageURL} onClose={this.handleModalClose} />
//         )}
//       </main>
//     );
//   }
// }

export default App;
