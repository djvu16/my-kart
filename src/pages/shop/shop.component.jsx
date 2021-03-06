import React from "react";
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";

import "./shop.styles.scss";

// import SHOP_DATA from "../../redux/shop/shop.data";


const ShopPage = ({ match }) => {
    console.log(match);
    return(
            <div className="shop-page">
                 <Route exact path={`${match.path}`} component={CollectionsOverview} />
                 <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }



export default ShopPage;