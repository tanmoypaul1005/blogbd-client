import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost, editPostData } from '../redux/AsyncAction/PostAction';
const Edit = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        title: '',
        description: '',
        image: '',
        author: '',

    });
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const Navigate = useNavigate();
    const { id } = useParams();
    console.log("productId", id);

    const EditPost = e => {
        let body = value.replace(/(<([^>]+)>)/gi, "");
        e.preventDefault();
        const data = { ...state, body }
        console.log("state", data);
        dispatch(editPost(data, id));
        Navigate('/profile');
    }


    useEffect(() => {
        dispatch(editPostData(id));
    }, [])

    const post = useSelector((state) => state.post.editdata);
    // console.log("EditData", post);

    //reload start
    function reload() {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
    reload()
    //reload end

    return (
        <div>
            <Helmet>
                <title>Edit Post</title>
                <meta name='description' content='Edit Post' />
            </Helmet>

            <div className="container ">
                <form onSubmit={EditPost} >
                    <div className="row ml-minus-15 mr-minus-15">
                        <div className="col-6 p-15">
                            <div className="card">
                                <h3 classame="card__h3">Create a New Post</h3>


                                <div className="group">
                                    <label htmlFor='title'>Post Title</label>
                                    <input
                                        type='text'
                                        name='title'
                                        id='title'
                                        defaultValue={state.title ? state.title : post.title}
                                        onChange={handleInput}
                                        className='group__control'
                                        placeholder='Post title...'
                                    />
                                </div>



                                <div className="group">
                                    <label htmlFor='title'>Author</label>
                                    <input
                                        type='text'
                                        name='author'
                                        id='author'
                                        defaultValue={state.author ? state.author : post.author}
                                        onChange={handleInput}
                                        className='group__control'
                                        placeholder='Author Name...'
                                    />
                                </div>



                                <div className='group'>
                                    <label htmlFor='title'>Image Url</label>
                                    <input
                                        type='text'
                                        name='image'
                                        defaultValue={state.image ? state.image : post.image}
                                        onChange={handleInput}
                                        className='group__control'
                                        placeholder='image url...'
                                    />
                                </div>

                                <div className='group'>
                                    <label htmlFor='body'>Post body</label>
                                    <ReactQuill
                                        theme='snow'
                                        id='body'
                                        name='body'
                                        defaultValue={value ? value : post.body}
                                        onChange={setValue}
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="col-d-6 p-15">
                            <div className="card">

                                <div className='group'>
                                    <label htmlFor='description'>Meta Description</label>
                                    <textarea
                                        name='description'
                                        id='description'
                                        cols='60'
                                        rows='10'
                                        defaultValue={state.description ? state.description : post.description}
                                        // onChange={handleDescription}
                                        onChange={handleInput}
                                        className='group__control'
                                        placeholder='meta description...'
                                        maxLength='5050'></textarea>
                                    <p className='length'>
                                        {state.description ? state.description.length : 0}
                                    </p>
                                </div>



                                <div className='group'>
                                    <input
                                        type='submit'
                                        value='Create post'
                                        className='btn btn-default btn-block'
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;