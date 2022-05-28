import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detail_post, postComment } from '../redux/AsyncAction/PostAction';
import Helmet from 'react-helmet';
import moment from 'moment';
import Comments from './Comments';
import './css/Details.css'
const Details = () => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log("productId", id);

    useEffect(() => {
        dispatch(detail_post(id))
    }, [dispatch])
    const post = useSelector((state) => state.post);
    const details = post.details;
    const comments = post.comments

    const auth = useSelector((state) => state.auth);


    const addComment = (e) => {
        dispatch(postComment({ postId: details._id, comment, name: auth.user.name }));
        setComment('');
        dispatch(detail_post(id))
    };

    return (
        <div className="detail">
            <div className='container'>
                <div className='row '>
                    <div className='col-8'>
                        <div className='post__details'>
                            <Helmet>
                                <title>{details.title}</title>
                            </Helmet>
                            <div className='post__header'>
                                <div className='post__header__avator'>
                                    {/* {details.author ? details.author : ''} */}
                                </div>
                                <div className='post__header__user'>
                                    <span>{details.author}</span>
                                    <span>{moment(details.updatedAt).format('MMM Do YY')}</span>
                                </div>
                            </div>
                            <div className='post__body'>
                                <h1 className='post__body__title'>{details.title}</h1>
                                <div className='post__body__details'>
                                    <h3>{details.body}</h3>
                                </div>
                                <div className='post__body__image'>
                                    <img className="detailsimage" src={details.image} alt={details.image} />
                                </div>

                                <div>
                                    <h2>{details.description}</h2>
                                </div>

                            </div>
                            {auth ? (
                                <>
                                    <div className='post__comment'>
                                        <form onSubmit={addComment}>
                                            <div className='group'>
                                                <input
                                                    type='text'
                                                    className='group__control'
                                                    placeholder='Write a comment...'
                                                    onChange={(e) => setComment(e.target.value)}
                                                    value={comment}
                                                />
                                            </div>
                                            <div className='group'>
                                                <input
                                                    type='submit'
                                                    value='Post comment'
                                                    className='btn btn-default'
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <Comments comments={comments} />
                                </>
                            ) : (
                                ''
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;