import React from 'react';
import Layout from './layouts/default';

class Main extends React.Component {
  render() {
    return (
      <Layout title={this.props.title} >
        <h1>{this.props.pageName}</h1>
        <p>{this.props.description}</p>
      </Layout>
    )
  }
}

export default Main;