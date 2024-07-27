import React, { useEffect, useState } from 'react'
import {db} from '../config/firebase'; 
import { collection, getDocs ,addDoc, deleteDoc,doc,updateDoc} from 'firebase/firestore';

export default function Table() {
   const [movieList,setMovieList] = useState([]);


  //new movie state
  const [newMovietitle,setNewMovieTitle] = useState("");
  const [newReleasedate,setNewReleaseDate] = useState(0);
  const [isNewMovieOscar,setIsNewMovieOscar] = useState(false);

const[updatedtitle,setUpdatedTitle] = useState("");
   const moviesCollectionRef = collection(db,"movies");
   const getMovieList= async()=>{
    //read data form list
    try{

      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc)=>({...doc.data(),id : doc.id,}))
      setMovieList(filteredData);
    } catch(err){
      console.error(err);
    }
  };
  const deleteMovie = async (id)=>{
    const movieDoc = doc(db,"movies",id)
      await deleteDoc(movieDoc);
  };
  const updatetitle = async (id)=>{
    const movieDoc = doc(db,"movies",id)
      await updateDoc(movieDoc,{title:updatedtitle});
  };
  useEffect(()=>{

    getMovieList();
  },[]);
   const onsubmitmovie= async()=>{
    try{
      await addDoc(moviesCollectionRef,{title:newMovietitle,releaseDate: newReleasedate, Recievedanaward: isNewMovieOscar,});
      getMovieList();
   }catch (err){
    console.error(err);
   }
  };
  return (
    <>
    <div>
      <input placeholder='Movie title...'  onChange={(e)=>setNewMovieTitle(e.target.value)} />
      <input placeholder='Realeae Date...'  type='number'  onChange={(e)=>setNewReleaseDate(Number(e.target.value))}/>
       <input type="checkbox" checked={isNewMovieOscar} onChange={(e)=>setIsNewMovieOscar(e.target.checked)}/> <label>recieved an oscar</label>
       <button onClick={onsubmitmovie}>Submit Movie</button>
    </div>
    <div>
      {movieList.map((movie)=>(
        <div>
          <h1 style={{color: movie.Recievedanaward ? "green" : "red"}}>{movie.title}</h1>
          <p>Date : {movie.releaseDate}</p>
          <button onClick={()=>deleteMovie(movie.id)}>Delete Movie</button>
          <input placeholder='newtitle...'  onChange={(e)=>setUpdatedTitle(e.target.value)}/>
          <button onClick={()=>updatetitle(movie.id)}>Update title</button>
          </div>
      ))}
    </div>
    </>
  )
}
