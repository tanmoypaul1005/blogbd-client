import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createAction } from '../redux/AsyncAction/PostAction';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [imagePreview, setImagePreview] = useState('');
    const dispatch = useDispatch();

    // const auth = useSelector((state) => state.auth);
    // console.log("PostAuth", auth)
    const [state, setState] = useState({
        title: '',
        description: '',
        image: '',
        author: ''
    });

    const handleDescription = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const [slug, setSlug] = useState('');
    const [slugButton, setSlugButton] = useState(false);

    const slugHandle = (e) => {
        setSlugButton(true);
        setSlug(e.target.value);
    };

    const handleURL = (e) => {
        e.preventDefault();
        setSlug(slug.trim().split(' ').join('-'));
    };

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        const createSlug = e.target.value.trim().split(' ').join('-');
        setSlug(createSlug);
    };

    const auth = localStorage.getItem("user");
    const myJSON = JSON.parse(auth);

    const [value, setValue] = useState('');

    const Navigate = useNavigate();


    const createPost = e => {
        let body = value.replace(/(<([^>]+)>)/gi, "");
        e.preventDefault();
        const data = { ...state, body, userId: myJSON._id, email: myJSON.email }
        // console.log("state", data);
        dispatch(createAction(data));
        Navigate('/');
    }

    return (
        <div>
            <Helmet>
                <title>Create New Post</title>
                <meta name='description' content='create a New Post' />
            </Helmet>

            <div className="container ">
                <form onSubmit={createPost}>
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
                                        value={state.title}
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
                                        value={state.author}
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
                                        value={state.image}
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
                                        value={value}
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
                                        defaultValue={state.description}
                                        onChange={handleDescription}
                                        className='group__control'
                                        placeholder='meta description...'
                                        maxLength='5050'></textarea>
                                    <p className='length'>
                                        {state.description ? state.description.length : 0}
                                    </p>
                                </div>


                                <div className="group">
                                    <label htmlFor='slug'>Post URL</label>
                                    <input
                                        type='text'
                                        name='slug'
                                        id='slug'
                                        value={slug}
                                        onChange={slugHandle}
                                        className='group__control'
                                        placeholder='Post URL...'
                                    />
                                </div>


                                <div className='group'>
                                    {slugButton ? (
                                        <button class='btn btn-default' onClick={handleURL}>
                                            Update Slug
                                        </button>
                                    ) : (
                                        ''
                                    )}
                                </div>


                                <div className='group'>
                                    <div className='imagePreivew'>
                                        {imagePreview ? <img src={imagePreview} /> : ''}
                                    </div>
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

export default Create;