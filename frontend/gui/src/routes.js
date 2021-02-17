import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './containers/PostListView';
import PostDetail from './containers/PostDetailView';


const BaseRouter = () => (
    <div>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:postID" component={PostDetail} />
        <Route exact path='/:userID' component={UserDetail} />
    </div>
)

export default BaseRouter;