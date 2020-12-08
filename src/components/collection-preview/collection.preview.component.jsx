import React from 'react'

import CollectionItem from '../collection-item/collection.item.component'
import './collection.preview.styles.scss'

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(({ id, ...otherCollectionItem }) => (
            <CollectionItem key={id} {...otherCollectionItem} />
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
