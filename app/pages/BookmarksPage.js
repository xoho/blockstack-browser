import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import ListItem from '../components/ListItem'

function mapStateToProps(state) {
  return {
    bookmarks: state.settings.bookmarks
  }
}

class BookmarksPage extends Component {
  render() {
    return (
      <div>
        <h3>Bookmarks</h3>

        <div style={{paddingBottom: '15px'}}>
          <ul className="list-group">
          { this.props.bookmarks.map(function(bookmark, index) {
            return (
              <ListItem
                key={index}
                label={ bookmark.label }
                url={"/profile/" + bookmark.id} />
            )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BookmarksPage)