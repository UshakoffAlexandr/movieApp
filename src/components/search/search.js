import React from 'react'
import { debounce } from 'lodash'
import { Input } from 'antd'
import './search.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = debounce(this.handleChange.bind(this), 500)
  }

  handleChange(event) {
    this.props.onSearch(event.target.value)
  }

  render() {
    return (
      <div className="search">
        <Input
          id="input"
          name="input"
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => {
            e.persist()
            this.handleChange(e)
          }}
        />
      </div>
    )
  }
}
